import { ReactNode, createContext, useContext , useState, useEffect} from "react";
import { api } from "../services";
import { AxiosError, AxiosResponse } from "axios";
import { TypeAvatarFile } from "../pages/Profile";

interface IProps {
    children: ReactNode
}

interface IParams {
    email: string,
    password: string
}

export interface IUser {
    avatar?: null | string,
    created_at?: string,
    email: string,
    id?: number,
    name: string,
    password?: string | null | undefined,
    old_password?: string | null | undefined,
    updated_at?: string
}

interface IDataAxiosResponse {
    token: string,
    user: IUser
}

interface IDataAxiosResponseError {
    message: string,
    code: number
}

export interface IParamsUpdateProfile {
    avatarFile: TypeAvatarFile,
    user: IUser
}

export interface IValue {
    signin: ({ email, password}: IParams) => Promise<void>,
    signOut: () => void,
    updateProfile: ({user, avatarFile}: IParamsUpdateProfile) => Promise<void>,
    user: IUser
}

const AuthContext = createContext({})

function AuthProvider( { children }: IProps) {
    const [data, setData] = useState<IDataAxiosResponse | null>(null)

    async function signin( {email, password}: IParams) {

        try{
            const response: AxiosResponse<IDataAxiosResponse> = await api.post("/sessions", { email, password })
            const {user, token} = response.data

            localStorage.setItem("@MyNotes:user", JSON.stringify(user))
            localStorage.setItem("@MyNotes:token", token)

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({user, token})

        } catch (error: unknown) {
            const axiosError = error as AxiosError<IDataAxiosResponseError>
            if (axiosError.response) {
                alert(axiosError.response.data.message)
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@MyNotes:token")
        localStorage.removeItem("@MyNotes:user")

        setData(null)
    }

    async function updateProfile({user, avatarFile}: IParamsUpdateProfile) {
        try {

            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)
            localStorage.setItem("@MyNotes:user", JSON.stringify(user))

            setData({user, token: (data as IDataAxiosResponse).token})
            alert("perfi atualizado")

        } catch (error: unknown) {

            const axiosError = error as AxiosError<IDataAxiosResponseError>
            if (axiosError.response) {
                alert(axiosError.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil")
            }

        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@MyNotes:token")
        const user = localStorage.getItem("@MyNotes:user")

        if(token && user) {
            api.defaults.headers.common.Authorization = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            signin,
            signOut,
            updateProfile,
            user: data && data.user
            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth}