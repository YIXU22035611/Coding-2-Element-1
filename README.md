<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CODING2-WEEK PROJECT</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
            text-align: center;
        }
        .container {
            max-width: 1200px;
            margin: auto;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
        }
        .project {
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding: 20px;
            border-radius: 8px;
        }
        .project:hover {
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .project a {
            text-decoration: none;
            color: #007BFF;
        }
        .project img {
            width: 100%;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>My p5.js project set</h1>
        <div class="projects-grid">
            <div class="project">
                <h2>project 1</h2>
                <a href="Week 2 - Snow/index.html">Week 2 - Snow</a>
                <p><a href="https://youtu.be/xajPvXDbI4I">Video Snow</a></p> <!-- 添加的链接 -->
            </div>
            <div class="project">
                <h2>project 2</h2>
                <a href="Week 3 - Boid/index.html">Week 3 - Boid</a>
                <p><a href="https://youtu.be/VOwqgNgn0js">Video Boid</a></p> <!-- 添加的链接 -->
            </div>
            <div class="project">
                <h2>project 3</h2>
                <a href="Week 7 - Letter/index.html">Week 7 - Letter</a>
                <p><a href="https://youtu.be/3LPoLrybXHQ">Video Letter</a></p> <!-- 添加的链接 -->
            </div>
            <div class="project">
                <h2>project 4</h2>
                <a href="Week4-6 Midterm/index.html">Week4-6 Midterm</a>
                <p><a href="https://youtu.be/U9fECiAPWz4">Video Midterm</a></p> <!-- 添加的链接 -->
            </div>
        </div>
    </div>
</body>
</html>
