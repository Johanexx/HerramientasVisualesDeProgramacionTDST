import tkinter as tk
from tkinter import filedialog

def seleccionar_archivos():
    # Configurar ventana emergente para seleccionar varios archivos
    root = tk.Tk()
    root.withdraw()  # No mostrar la ventana principal
    archivos = filedialog.askopenfilenames(title="Selecciona los archivos .txt", filetypes=[("Archivos de texto", "*.txt")])
    return archivos

def juntar_archivos(archivos, archivo_salida):
    with open(archivo_salida, 'w') as salida:
        for archivo in archivos:
            with open(archivo, 'r') as f:
                salida.write(f.read() + "\n")  # Agregar salto de línea entre archivos

if __name__ == "__main__":
    archivos_txt = seleccionar_archivos()  # Selecciona los archivos
    if archivos_txt:  # Si se seleccionaron archivos
        archivo_salida = "archivos_juntos.txt"  # Nombre del archivo de salida
        juntar_archivos(archivos_txt, archivo_salida)
        print(f"Archivos combinados en {archivo_salida}")
    else:
        print("No se seleccionaron archivos.")
