'''
Instrucciones:

escribir una funcion

'''
import math
def esPalindromo(str):
    if str == '':
        return False # O(1)

    for i in range(0, math.floor(len(str)/2)):
        if str[i] != str[len(str) - i - 1]:
            return False # O(1)
    # O(n/2) * O(1)
    return True 
# O(1) + O(n/2) = O(n)
