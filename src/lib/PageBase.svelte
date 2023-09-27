<script>
    export let pageTitle = "";
</script>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{pageTitle}</title>
    </head>

    <style>
        .container{
            width: 1200px;
            margin : auto;
        }
    </style>

    <body class="container">
        <slot>
        </slot>
    </body>
</html>
