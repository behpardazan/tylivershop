<template>
 
  <NuxtLayout>
     <NuxtPage />
   </NuxtLayout>
 </template>
 
 <script setup>
     useHead({
         // titleTemplate:'%s || نامور '
         titleTemplate:(title)=>{return title? `${title} ||  تایلیور شاپ` : "تایلیورشاپ بزرگترین فروشگاه آنلاین لوازم موتور سیکلت" }
       })
 </script>