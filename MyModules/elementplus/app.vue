<template>
  <div>
    <!-- Botón de Element+ -->
    <el-button @click="showDialog">Mostrar Diálogo</el-button>

    <!-- Cuadro de diálogo de Element+ -->
    <el-dialog
      :visible.sync="dialogVisible"
      title="Diálogo de Ejemplo"
      width="30%"
      :close-on-click-modal="false"
    >
      <p>¡Este es un cuadro de diálogo de Element+!</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancelar</el-button>
        <el-button type="primary" @click="dialogVisible = false">Aceptar</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElButton, ElDialog } from "element-plus";

const dialogVisible = ref(false);

const showDialog = () => {
  dialogVisible.value = true;
};
</script>

<style>
/* Estilos de Element+ aquí */
</style>
