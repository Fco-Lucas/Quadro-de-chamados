import { NextResponse, type NextRequest, type MiddlewareConfig } from "next/server";

const publicRoutes = [
  { path: '/sign-in', whenAuthenticated: 'redirect' },
  { path: '/registerAdmin', whenAuthenticated: 'access' },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/sign-in';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find(route => route.path === path);
  const authToken = request.cookies.get('authToken')?.value;

  // Verifica se a rota é pública
  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  // Redireciona para o login se o usuário não estiver autenticado e a rota não for pública
  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  // Redireciona usuários autenticados que tentam acessar rotas públicas com whenAuthenticated: 'redirect'
  if (authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/';
    return NextResponse.redirect(redirectUrl);
  }

  if(authToken && !publicRoute) {
    return NextResponse.next();
  }

  // Permite o acesso se o usuário estiver autenticado e tiver permissão
  return NextResponse.next();


  // if (authToken) {
  //   const decodedToken = DecodeAuthToken(authToken);

  //   // console.log("decodedToken", decodedToken)

  //   const userRole = decodedToken?.role;

  //   // Redireciona administradores para /dashboard ao acessarem /
  //   if (path === '/' && userRole === 'ADMIN') {
  //     const redirectUrl = request.nextUrl.clone();
  //     redirectUrl.pathname = '/dashboard';
  //     return NextResponse.redirect(redirectUrl);
  //   }

  //   // Verifica o role do usuário para rotas protegidas
  //   if (adminRoutes.includes(path) && userRole !== 'ADMIN') {
  //     const redirectUrl = request.nextUrl.clone();
  //     redirectUrl.pathname = "/";
  //     return NextResponse.redirect(redirectUrl);
  //   }
  // }
}

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};