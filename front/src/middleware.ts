import { NextResponse, type NextRequest, type MiddlewareConfig } from "next/server";
import verifyToken from "./utils/verifyToken";

// Constantes de configuração
const ROLES = {
  ADMIN: "ADMIN",
  SUPERVISOR: "SUPERVISOR",
  USER: "USER"
} as const;

const publicRoutes = [
  { path: '/sign-in', whenAuthenticated: 'redirect' },
  { path: '/registerAdmin', whenAuthenticated: 'access' },
] as const;

const protectedRoutes = {
  '/admin': [ROLES.ADMIN],
  '/users': [ROLES.SUPERVISOR, ROLES.ADMIN],
  '/': [ROLES.USER, ROLES.SUPERVISOR, ROLES.ADMIN],
  '/profile': [ROLES.USER, ROLES.SUPERVISOR, ROLES.ADMIN],
} as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED = '/sign-in';
const UNAUTHORIZED_ROUTE = '/unauthorized';
const DEFAULT_ROUTE = '/';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const publicRoute = publicRoutes.find(route => route.path === pathname);
  const authToken = request.cookies.get('authToken')?.value;

  // Verificação de autenticação e roles
  let isAuthenticated = false;
  let userRole = null;
  
  if (authToken) {
    const { valid, decoded } = await verifyToken(authToken);
    isAuthenticated = valid;
    userRole = decoded?.role;
    
    // Token inválido - remove cookie e redireciona
    if (!valid) {
      const response = NextResponse.redirect(new URL(REDIRECT_WHEN_NOT_AUTHENTICATED, request.url));
      response.cookies.delete('authToken');
      return response;
    }
  }

  // 1. Rotas públicas
  if (!isAuthenticated) {
    return publicRoute 
      ? NextResponse.next()
      : NextResponse.redirect(new URL(REDIRECT_WHEN_NOT_AUTHENTICATED, request.url));
  }

  // 2. Usuário autenticado tentando acessar rota pública com redirect
  if (publicRoute && publicRoute.whenAuthenticated === 'redirect') {
    return NextResponse.redirect(new URL(DEFAULT_ROUTE, request.url));
  }

  // 3. Verificação de rotas protegidas
  if (!publicRoute) {
    const matchedRoute = Object.entries(protectedRoutes).find(([routePrefix]) => 
      pathname.startsWith(routePrefix)
    );

    if (matchedRoute && !matchedRoute[1].includes(userRole!)) {
      return NextResponse.redirect(new URL(UNAUTHORIZED_ROUTE, request.url));
    }
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};