import unittest
from reverse import esPalindromo

class TestPalindromo(unittest.TestCase):
    def test_empty_str(self):
        self.assertEqual(esPalindromo(''), False, "La función debería de aceptar una cadena vacía")

    def test_palindrome(self):
        self.assertEqual(esPalindromo('ana'), True, "La función debe de determinar si una cadena es palíndromo o no")
        self.assertEqual(esPalindromo('ico'), False, "La función debe de determinar si una cadena es palíndromo o no")
        self.assertEqual(esPalindromo('09890'), True, "La función debe de determinar si una cadena es palíndromo o no")

if __name__ == "__main__":
    unittest.main()
