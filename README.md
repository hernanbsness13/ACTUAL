[README.md.txt](https://github.com/user-attachments/files/22438159/README.md.txt)
# RespondeYA Landing 🚀

Este proyecto es la landing page oficial de **RespondeYA**, construida con **React + Vite + TailwindCSS** y desplegada en **Vercel**.

---

## 🛠️ Scripts disponibles

En la raíz del proyecto podés correr:

### `npm install`
Instala todas las dependencias necesarias.

### `npm run dev`
Inicia el servidor de desarrollo en `http://localhost:5173`.

### `npm run build`
Genera la versión optimizada de producción en la carpeta `/dist`.

### `npm run preview`
Sirve localmente la carpeta `/dist` para probar el build antes de subirlo a Vercel.

---

## 🌐 Deploy en Vercel

Este repo está conectado a **Vercel**:

- Cada vez que hagas un **commit + push** al branch `main`, Vercel desplegará automáticamente una nueva versión en producción.  
- El dominio principal es: **https://respondeya.com.ar**

---

## 🚀 Cómo forzar un nuevo deploy

Si querés disparar un redeploy manual:

1. Hacé un cambio cualquiera en el proyecto (ejemplo: editar `README.md` o agregar un comentario en un archivo).
2. Guardá los cambios y ejecutá:

```bash
git add .
git commit -m "chore: trigger redeploy"
git push origin main
