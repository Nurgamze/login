<template>
  <!-- Navigation -->
  <!DOCTYPE html>

  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Kayıt Ol</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
    </head>

    <body>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow"
      >
        <div class="container">
          <a class="navbar-brand" href="#">Gençlik Hamlesi Kursları</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Page Content -->
      <div class="container">
        <div
          style="
            background: url('https://source.unsplash.com/twukN12EN7c/1920x1080')
              no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            -o-background-size: cover;
          "
          class="card border-0 shadow my-5"
        >
          <div class="card-body p-5">
            <h1 class="text-align-center align-items-center">Gençlik Hamlesine Hoşgeldiniz</h1>
            <p class="lead">
              In this snippet, the background image is fixed to the body
              element. Content on the page will scroll, but the image will
              remain in a fixed position!
            </p>
            <p class="lead">Scroll down...</p>
            <div style="height: 700px"></div>
            <p class="lead mb-0">You've reached the end!</p>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>
