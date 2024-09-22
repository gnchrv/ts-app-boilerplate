/**
 * Composes a greeting message
 * @param name A name of a person to greet
 * @returns A greeting message
 */
function greeting(name: string) {
    return `Hello ${name}`
}

// Create a name of a person
const name = 'Misha'

// Compose a greeting message
const message = greeting(name)

// Print the message to the console
console.log(message)