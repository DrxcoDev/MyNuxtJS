<template>
    <body class="bg-black text-light">
        <div class="d-flex" style="margin-left: 100px;">

            <div class="d-inline">
                <div style="padding: 100px;">
                    <div class="mt-4">
                        <a 
                        class="p-3 text-light border border-white rounded"
                        style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border White</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-primary border border-primary rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border Blue</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-success border border-success rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border Green</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-danger border border-danger rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border Red</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-warning border border-warning rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border White</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-success-emphasis border border-success-emphasis rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border Light green</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-info border border-info rounded" style="width: 60px;height: 20px;text-decoration: none;border: cyan 2px solid;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border cyan</a>
                    </div>
                    
                </div>
            </div>

            <div class="d-inline">
                <div style="padding: 100px;">
                    <div class="mt-4">
                        <a class="p-3 text-black border bg-light border-white rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Classic</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-light border bg-primary border-primary rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border Blue</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-light bg-success border border-success rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border Green</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-light bg-danger border border-danger rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border Red</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-light bg-warning border border-warning rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border White</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-black bg-success-subtle border border-success-emphasis rounded" style="width: 60px;height: 20px;text-decoration: none;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border Light green</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-light bg-info border-info border rounded" style="width: 60px;height: 20px;text-decoration: none;border: cyan 2px solid;"
                        :class="{ 'btn-primary': !isHovered, 'btn-secondary': isHovered }"
                        @mouseover="isHovered = true"
                        @mouseout="isHovered = false">Border cyan</a>
                    </div>
                    
                </div>
            </div>

            <div class="d-inline">
                <div style="padding: 100px;">
                    <div class="mt-4">
                        <a class="p-3 text-black border bg-light border-white " style="width: 60px;height: 20px;text-decoration: none;">Classic</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-light border bg-primary border-primary " style="width: 60px;height: 20px;text-decoration: none;">Border Blue</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-light bg-success border border-success " style="width: 60px;height: 20px;text-decoration: none;">Border Green</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-light bg-danger border border-danger " style="width: 60px;height: 20px;text-decoration: none;">Border Red</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-light bg-warning border border-warning " style="width: 60px;height: 20px;text-decoration: none;">Border White</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-black bg-success-subtle border border-success-emphasis " style="width: 60px;height: 20px;text-decoration: none;">Border Light green</a>
                    </div>
                    <div class="mt-6" style="margin-top: 50px;">
                        <a class="p-3 text-light bg-info border-info border" style="width: 60px;height: 20px;text-decoration: none;border: cyan 2px solid;">Border cyan</a>
                    </div>
                    
                </div>
            </div>

        </div>
        
    </body>

    
</template>


<script>
        export default {
            data() {
                return {
                isHovered: false,
                };
            }
        };
</script>
<style>
        .btn-primary {
            margin-top: 0px;
            transition-duration: 1.2s;
            position: inherit;
            }

        .btn-secondary {
            margin-left: 20px;
            transition-duration: 1.2s;
            }
<<<<<<< HEAD
    </style>
=======
    </style>
>>>>>>> 93ca054ab3fcf26d6516169309e6218e1fe81e88
