$(document).ready(function () {
    let texto = $('#resultado');
    let num1, num2, num = '', operacion;

    $('button').on('click', function () {
        let valor = this.id;

        if (!isNaN(valor) || valor == 'C') {
            if (valor == 'C') {
                num = '';
                texto.val('');
            } else {
                texto.val('');
                num += valor;
                texto.val(num);
            }
        } else {
            switch (valor) {
                case '+':
                    num1 = num != '' ? parseFloat(num) : 0;
                    operacion = 1;
                    break;
                case '-':
                    num1 = num != '' ? parseFloat(num) : 0;
                    operacion = 2;
                    break;
                case '/':
                    num1 = num != '' ? parseFloat(num) : 0;
                    operacion = 3;
                    break;
                case '*':
                    num1 = num != '' ? parseFloat(num) : 0;
                    operacion = 4;
                    break;
                case '=':
                    num2 = num != '' ? parseFloat(num) : 0;
                    calcular(num1, num2, operacion);
                    num1 = num2 = 0;
                    break;
            }
            num = '';
        }
    });

    function calcular(n1, n2, operacion) {
        switch (operacion) {
            case 1:
                texto.val(n1 + n2);
                break;
            case 2:
                texto.val(n1 - n2);
                break;
            case 3:
                texto.val(n1 / n2);
                break;
            case 4:
                texto.val(n1 * n2);
                break;
        }
    }
});