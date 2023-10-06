<template>
    <div>

    </div>
</template>

<script setup>
await fetch('http://localhost:3000/api/add-document', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ projectId: 'wfw-2195', collectionName: 'fwefw', documentData: { ffewf: `fwefwe`, fwefw: `fwew34`, ewfw: `g43g3`}, }),
      });
</script>

<style lang="scss" scoped>

</style>