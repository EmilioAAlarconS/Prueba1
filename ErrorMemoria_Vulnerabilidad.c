#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int main() {
    char nombreUsuario[8]; 
    bool es_admin = false;

    printf("-----Sistema de control de la puerta del centro de computo-----\n");
    
    printf("La variable es_admin ANTES DE ASIGNAR EL NOMBRE tiene el valor: %d\n", es_admin);

    // El nombre de usuario de "Pedro" no excede el espacio ortorgado de 8 bytes, por lo que
    // cumple con el tamaño de la variable nombreUsuario, y no corrompe la memoria.
    //strcpy(nombreUsuario, "Pedro");
    
    // En este caso el nombre de usuario excede el espacio de 8 bytes, por lo que corrompe la
    // la memoria y el vallor de la variable "es_admin" cambia a true, debido a que si un valor
    // booleano es distinto de 0, se considera true. En este caso, el valor de la variable es_admin

    strcpy(nombreUsuario, "A123456789");

    printf("\nEl nombre del usuario es: %s\n", nombreUsuario);

    printf("La variable es_admin DESPUES DE ASIGNAR EL NOMBRE, tiene el valor: %d\n", es_admin);

    if (es_admin)
    {
        printf("\n ACCEDISTE COMO DOCENTE, la memoria fue corrompida \n");
    } else {
        printf("\n No puedes pasar al salon, ya que no eres el docente \n");
    }
    
    return 0;
}