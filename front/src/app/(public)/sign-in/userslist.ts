import { UserRoleEnum, UserStatusEnum, UserInterface } from "@/types/users";

export const usersList: UserInterface[] = [
  {
    id: "1",
    name: "João Silva",
    cpf: "123.456.789-00",
    userRole: UserRoleEnum.ADMIN,
    userStatus: UserStatusEnum.ACTIVE
  },
  {
    id: "2",
    name: "Maria Oliveira",
    cpf: "987.654.321-00",
    userRole: UserRoleEnum.SUPERVISOR,
    userStatus: UserStatusEnum.ACTIVE
  },
  {
    id: "3",
    name: "Carlos Souza",
    cpf: "456.123.789-00",
    userRole: UserRoleEnum.USER,
    userStatus: UserStatusEnum.ACTIVE
  },
  {
    id: "4",
    name: "Ana Pereira",
    cpf: "789.123.456-00",
    userRole: UserRoleEnum.USER,
    userStatus: UserStatusEnum.INACTIVE
  },
  {
    id: "5",
    name: "Pedro Costa",
    cpf: "321.654.987-00",
    userRole: UserRoleEnum.SUPERVISOR,
    userStatus: UserStatusEnum.ACTIVE
  },
  {
    id: "6",
    name: "Mariana Santos",
    cpf: "654.987.321-00",
    userRole: UserRoleEnum.ADMIN,
    userStatus: UserStatusEnum.INACTIVE
  },
  {
    id: "7",
    name: "Lucas Fernandes",
    cpf: "147.258.369-00",
    userRole: UserRoleEnum.USER,
    userStatus: UserStatusEnum.ACTIVE
  },
  {
    id: "8",
    name: "Juliana Almeida",
    cpf: "258.369.147-00",
    userRole: UserRoleEnum.SUPERVISOR,
    userStatus: UserStatusEnum.ACTIVE
  },
  {
    id: "9",
    name: "Ricardo Nunes",
    cpf: "369.147.258-00",
    userRole: UserRoleEnum.USER,
    userStatus: UserStatusEnum.INACTIVE
  },
  {
    id: "10",
    name: "Fernanda Lima",
    cpf: "951.753.864-00",
    userRole: UserRoleEnum.ADMIN,
    userStatus: UserStatusEnum.ACTIVE
  }
];