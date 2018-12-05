function sum3(x) {
    return (y) => {
      return (z) => {
        return x + y + z;
      };
    };
  }
  console.log(sum3(1)(2)(3));