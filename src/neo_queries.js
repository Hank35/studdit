
function createUser(session, user) {
    let queries = []

    // if there are no hobbies we should still add the user alone
    if (user.threads.length === 0) {
        queries.push(
            session.run('MERGE (p: Person {name: $name}) ' +
                        'RETURN p',
                        {
                            name: user.name
                        }
            )
        );
    }
}