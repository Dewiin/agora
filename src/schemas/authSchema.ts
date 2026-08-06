import z from "zod";

// Name and passphrase parameters
const NAME_LEN_MINIMUM = 1
const NAME_LEN_MAXIMUM = 20
const PASS_LEN_MINIMUM = 8
const PASS_LEN_MAXIMUM = 512
const USERNAME_UNICODE = /^[a-zA-Z0-9_]+$/
const PRINTABLE_UNICODE = /^[\P{Cc}\P{Cn}\P{Cs}]+$/gu // allow only, printable (unicode) characters; https://stackoverflow.com/a/12054775

export const loginSchema = z.object({
    username: z.string(),
    password: z.string()
});

export const signupSchema = z.object({
    firstName: z.string().trim().min(NAME_LEN_MINIMUM, {
        error: "First name must have a character."
    }).max(NAME_LEN_MAXIMUM, {
        error: "First name is limited to " + NAME_LEN_MAXIMUM + " characters."
    }),
    lastName: z.string().trim().min(NAME_LEN_MINIMUM, {
        error: "Last name must have a character."
    }).max(NAME_LEN_MAXIMUM, {
        error: "Last name is limited to " + NAME_LEN_MAXIMUM + " characters."
    }),
    username: z.string().trim().min(NAME_LEN_MINIMUM, {
        error: "Username must have a character."
    }).max(NAME_LEN_MAXIMUM, {
        error: "Username is limited to " + NAME_LEN_MAXIMUM + " characters."
    }).regex(USERNAME_UNICODE, {
        error: "Username can only contain underscores and alphanumeric characters."
    }),
    password: z.string().min(PASS_LEN_MINIMUM, {
        error: "Password must be at least " + PASS_LEN_MINIMUM + " characters."
    }). max(PASS_LEN_MAXIMUM, {
        error: "Password has a " + PASS_LEN_MAXIMUM + " character limit."
    }).regex(PRINTABLE_UNICODE, { 
        error: "Password can only contain printable characters."
    }),
});