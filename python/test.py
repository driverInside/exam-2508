import unittest
from chunk import divideArreglo

class TestPalindromo(unittest.TestCase):
    def test_divide_by_two(self):
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        result = divideArreglo(2, *arr)
        self.assertEqual(result, [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]], "Debería de dividir en subarreglos de 2")

    def test_divide_by_one(self):
        arr = [1, 2, 3]
        result = divideArreglo(1, *arr)
        self.assertEqual(result, [[1, 2, 3], [4, 5]], "Debería dividir el arreglo en subarreglos de 1")

    def test_divide_by_three(self):
        arr = [1, 2, 3, 4, 5]
        result = divideArreglo(3, *arr)
        self.assertEqual(result, [[1, 2, 3], [4, 5]], "Debería dividir el arreglo en subarreglos de 3")

    def test_divide_by_five(self):
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        result = divideArreglo(5, *arr)
        self.assertEqual(result, [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]], "Debería de dividir el arreglo en subarreglos de 5")

    def test_divide_by_ten(self):
        arr = [1, 2, 3, 4, 5]
        result = divideArreglo(10, *arr)
        self.assertEqual(result, [[ 1, 2, 3, 4, 5]], "Debería de dividir el arreglo en subarreglos de 10")

if __name__ == '__main__':
    unittest.main()
