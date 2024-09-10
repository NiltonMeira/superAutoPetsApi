export type TUser = {
    id: string,
    user: string,
    email: string,
    password: string
}

export type TUserCreation = Omit<TUser, "id">
export type TUserUpdate = Partial<TUserCreation>

export type Role = "ADM" | "User" | null