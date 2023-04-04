function contarAlturaSexo() {
    var altura, sexo, contM = 0, contF = 0, maiorAltura = 0, maiorAlturaSexo;

    for (var i = 1; i <= 5; i++) {
        altura = parseFloat(prompt("Digite a altura da primeira pessoa " + i));
        sexo = prompt("Selecione o sexo da primeira pessoa " + i + " (M/F)").toUpperCase();

        if (sexo === "M") {
            contM++;
            if (altura > maiorAltura) {
                maiorAltura = altura;
                maiorAlturaSexo = "Masculino";
            }
        } else if (sexo === "F") {
            contF++;
            if (altura > maiorAltura) {
                maiorAltura = altura;
                maiorAlturaSexo = "Feminino";
            }
        } else {
            alert("Sexo inválido! Digite apenas M ou F.");
            i--; // volta uma posição para o usuário corrigir o erro
        }
    }

    document.write("A quantidade de homens é: " + contM + "<br>");
    document.write("A quantidade de mulheres é: " + contF + "<br>");
    document.write("A maior altura é: " + maiorAltura.toFixed(2) + " metros (" + maiorAlturaSexo + ")");
}