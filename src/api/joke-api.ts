export const getJoke = async () => {
    return await (await fetch(`${process.env.BASE_URL}`)).json()
}