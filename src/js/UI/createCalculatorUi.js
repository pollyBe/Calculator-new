export const createCalculatorView = () => `<div class="calculator">
                <div class="calculator__wrapper">
                <div class="calculator__display">
                  <div class="calculator__expression"></div>
                  <div class="calculator__result">0</div>
                </div>

                <button data-val="MC" class="calculator__button-operation mc">MC</button>
                <button data-val="M+" class="calculator__button-operation">M+</button>
                <button data-val="AC" class="calculator__button-operation clear">AC</button>
                <button data-val="+/-" class="calculator__button-operation sign-change">+/-</button>
                <button data-val="%" class="calculator__button-operation percent">%</button>
                <button data-val="/" class="calculator__button-operation divide">/</button>

                <button data-val="MR" class="calculator__button-operation mr">MR</button>
                <button data-val="M-" class="calculator__button-operation">M-</button>
                <button data-val="7" class="calculator__button">7</button>
                <button data-val="8" class="calculator__button">8</button>
                <button data-val="9" class="calculator__button">9</button>
                <button data-val="*" class="calculator__button-operation multiple">*</button>

                <button data-val="x**2" class="calculator__button-operation"> x<sup>2</sup> </button>
                <button data-val="x**3" class="calculator__button-operation"> x<sup>3</sup> </button>
                <button data-val="x**y" class="calculator__button-operation"> x<sup>y</sup> </button>
                <button data-val="4" class="calculator__button">4</button>
                <button data-val="5" class="calculator__button">5</button>
                <button data-val="6" class="calculator__button">6</button>
                <button data-val="-" class="calculator__button-operation minus">-</button>

                <button data-val="10**x" class="calculator__button-operation"> 10<sup>x</sup> </button>
                <button data-val="1/x" class="calculator__button-operation">1/x</button>
                <button data-val="sqrt" class="calculator__button-operation"> &radic;x </button>
                <button data-val="1" class="calculator__button">1</button>
                <button data-val="2" class="calculator__button">2</button>
                <button data-val="3" class="calculator__button">3</button>
                <button data-val="+" class="calculator__button-operation plus">+</button>

                <button data-val="cbrt" class="calculator__button-operation">&#179;&radic;x</button>
                <button data-val="root" class="calculator__button-operation"><sup>y</sup>&radic;x</button>
                <button data-val="factorial" class="calculator__button-operation">x!</button>
                <button data-val="0" class="calculator__button zero">0</button>
                <button data-val="." class="calculator__button">.</button>

                <button data-val="=" class="calculator__button-operation equals">=</button>
</div></div>`;
