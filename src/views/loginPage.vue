<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap demo</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <section class="vh-100" style="background-color: #f7f6dc">
        <div class="container py-5 h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col col-xl-10">
              <div class="card" style="border-radius: 1rem">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="../gençlik.jpeg"
                      alt="login form"
                      class="img-fluid"
                      style="border-radius: 1rem 0 0 1rem"
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i
                            class="fas fa-cubes fa-2x me-3"
                            style="color: #ff6219"
                          ></i>
                          <img
                            style="margin-left: 81px"
                            width="50%"
                            src="../GH--02.png"
                            alt=""
                          />
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-3"
                          style="letter-spacing: 1px"
                        >
                          Hesabınıza Giriş Yapın
                        </h5>

                        <div class="form-outline mb-4">
                          <input
                            v-model="userData.name"
                            type="username"
                            id="form2Example17"
                            class="form-control form-control-lg"
                            placeholder="name"
                          />
                          <label
                            class="form-label"
                            for="form2Example17"
                          ></label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            v-model="userData.password"
                            type="password"
                            id="form2Example27"
                            class="form-control form-control-lg"
                            placeholder="password"
                          />
                          <label
                            class="form-label"
                            for="form2Example27"
                          ></label>
                        </div>

                        <div
                          class="d-flex justify-content-between align-items-center pt-1 mb-4"
                        >
                          <button
                            @click="onSubmit"
                            class="btn btn-primary btn-lg"
                            type="button"
                          >
                            Giriş Yap
                          </button>

                          <button
                            @click="$router.push({ name: 'register' })"
                            class="btn btn-primary btn-lg"
                            type="button"
                          >
                            Kayıt Ol
                          </button>
                          <!-- her iki şekilde de router kullanılır -->
                          <!-- <router-link
                            :to="{ name: 'register' }"
                            class="btn btn-primary btn-lg"
                            type="button"
                          >
                            Kayıt Ol
                          </router-link> -->
                        </div>

                        <a class="small text-muted" href="#!"
                          >Şifremi Unuttum?</a
                        >
                        <br />
                        <br />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </html>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.userData.name != "" && this.userData.password != "") {
        if (
          this.userData.name == this.$userData.name &&
          this.userData.password == this.$userData.password
        ) {
          this.$router.push({ name: "home" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      }
    },

    // this.$appAxios.get(
    //   `/userData?name=${this.userData.username}&password=${this.userData.password}`
    // );
    // this.$router.push({ name: "home" });
  },
};
</script>
