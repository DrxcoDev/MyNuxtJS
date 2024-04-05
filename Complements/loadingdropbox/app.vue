<template>
  <body class="bg-primary">
    
    <Sidebar />
    <!-- This renders the "span" element on the server side -->
    <ClientOnly fallbackTag="span"  style="margin-top: -100px;">
      <!-- this component will only be rendered on client side -->
      <Comments />
        <template #fallback>
        <!-- this will be rendered on server side -->
          <div class="text-light position-absolute top-0 start-50 translate-middle" style="padding-top: 200px;">
            <h1>A loading BOX</h1>
          </div>
          <div class="bg-light text-black p-3 border border-2 border-secondary-subtle rounded position-absolute top-50 start-50 translate-middle " style="width: 400px;">
            <div class="d-flex">
              <div class="bg-secondary opacity-25 rounded" style="width: 75px;height: 20px;"></div>
              <div class="bg-secondary opacity-25 rounded ms-2" style="width: 75px;height: 20px;"></div>
            </div>
          </div>
          <div class="bg-light text-black p-3 border border-2 border-secondary-subtle rounded position-absolute top-50 start-50 translate-middle" style="width: 400px;margin-top: 80px;">
            <div class="d-flex">
              <div class="bg-secondary opacity-25 rounded" style="width: 75px;height: 20px;"></div>
            </div>
          </div>
        </template>
    </ClientOnly>
      
   
  </body>
</template>
