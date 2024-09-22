// Declare environment variables types
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string
        }
    }
}

// Convert the file into a module by adding an empty export statement
export { }