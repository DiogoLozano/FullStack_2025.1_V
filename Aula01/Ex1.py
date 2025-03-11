import math

opcao = input("Você deseja calcular o volume do dodecaedro ou icosaedro: ")
dodecaedro = opcao
icosaedro = opcao
a = float(input("Digite o valor da aresta a em metros: "))

if  opcao == "dodecaedro":
    v = (15 + 7 *math.sqrt(5)) * (a** 3) / 4
    print(f"O volume de um dodecaedro regular com {a: .2f} de aresta é: {v: .2f}")

elif opcao == "icosaedro":
    v = 5/12*(3 + math.sqrt(5))*(a**3)
    print(f"O volume de um isocaedro regular com {a: .2f} de aresta é: {v: .2f}")

else:
    print("Opção inválida. Escolha entre 'dodecaedro' ou 'icosaedro'.")

    