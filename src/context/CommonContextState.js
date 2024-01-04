import AuthState from "./auth/AuthState"
import NoteState from "./notes/NoteState"

const CommonContextState = ({children}) => {
  return(
    <AuthState>
        <NoteState>
            {children}
        </NoteState>
    </AuthState>
  )
}

export default CommonContextState;
