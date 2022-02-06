function validate(k) {
    document.calcu.text1.value+= k;

  }

  function ans() {
    x = document.calcu.text1.value
    y = eval(x)
    document.calcu.text1.value = y

  }
    function clr(){
    str = "0";
    document.calcu.text1.value = str;
    }
  function fsqr() {
    x = document.calcu.text1.value
    y = eval(Math.sqrt(x));
    document.calcu.text1.value = y
  }
  function flog() {
      x = document.calcu.text1.value
        y = eval(Math.log(x));
        document.calcu.text1.value=y
  }

  function fpow() {
    x = document.calcu.text1.value
      y = eval(Math.pow(x,2));
      document.calcu.text1.value=y

  }