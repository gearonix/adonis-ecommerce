export type EditProfileForm = {
    firstName: string
    lastName: string
    description: string
    country: string
    city: string
}

export type CreateFormApi = {
    setValue(value: string): void,
    value: string
}
