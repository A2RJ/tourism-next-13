if (typeof window !== "undefined") {
  const navbar = document.getElementById("navbar");
  navbar.addEventListener("scroll", function () {
    console.log(navbar);
  });
  console.log("client component");
} else {
  console.log("server component");
}
