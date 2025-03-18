module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
    corePlugins: {
      preflight: true,
    },
  }

  @tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  /* Stile per la Card */
  .card {
    @apply bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105;
  }

  .card-header {
    @apply text-2xl font-bold text-gray-800 mb-4;
  }

  .card-body {
    @apply text-gray-600 mb-4;
  }

  .card-footer {
    @apply flex justify-end;
  }

  /* Stile per il Pulsante */
  .btn {
    @apply px-6 py-2 rounded text-white font-medium transition;
  }

  .btn-primary {
    @apply bg-blue-600 hover:bg-blue-700;
  }

  .btn-secondary {
    @apply bg-gray-600 hover:bg-gray-700;
  }

  .btn-danger {
    @apply bg-red-600 hover:bg-red-700;
  }

  .btn-disabled {
    @apply bg-gray-400 cursor-not-allowed;
  }
}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stili Riutilizzabili con Tailwind CSS</title>
  <link href="styles.css" rel="stylesheet">
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">

  <!-- Card -->
  <div class="card">
    <div class="card-header">Card Personalizzata</div>
    <div class="card-body">
      Questa è una card personalizzata. Utilizza stili riutilizzabili per garantire coerenza nel design.
    </div>
    <div class="card-footer">
      <button class="btn btn-primary">Conferma</button>
      <button class="btn btn-secondary ml-4">Annulla</button>
    </div>
  </div>

  <!-- Card con pulsante disabilitato -->
  <div class="card mt-6">
    <div class="card-header">Card Disabilitata</div>
    <div class="card-body">
      Questa card contiene un pulsante disabilitato per mostrare lo stile applicato.
    </div>
    <div class="card-footer">
      <button class="btn btn-danger btn-disabled" disabled>Elimina</button>
    </div>
  </div>

</body>
</html>