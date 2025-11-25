function welcome(name: string) {
    console.log('hello')

    const user = {
        name: 'Aniket',
    }

    const fname = user.name

    return name + fname
}

welcome('Aniket')
