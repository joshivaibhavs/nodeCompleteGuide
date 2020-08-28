exports.index = `
<html>

<head>
    <title>Assignment 1</title>
</head>

<body>
    <div class="container">
        <h1>Welcome to assignment one!</h1>
        <p>Go to <a href="/users">All Users</a>!</p>
        <form action="/create-user" method="POST" >
            <input type="text" name="username" required pattern="^[A-Za-z0-9 ]+$" /><br>
            <input type="submit" value="Register!">
        </form>
    </div>
</body>
<style>
    .container {
        height: 100%;
        width: 100%;
        text-align: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>

</html>
`

exports.users = `
<html>

<head>
    <title>Assignment 1</title>
</head>

<body>
    <div class="container">
        <h1>Welcome to assignment one!</h1>
        <p>Go to <a href="/">Home</a>!</p>
        <ul>
            {userlist}
        </ul>
    </div>
</body>
<style>
    .container {
        height: 100%;
        width: 100%;
        text-align: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>

</html>
`

