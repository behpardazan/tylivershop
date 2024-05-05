<template>
  <div class="tableContainer">
    <div class="info-box mt-2 tablePro">
      <strong class="flex items-center content-start">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 5C1 4.20435 1.31607 3.44129 1.87868 2.87868C2.44129 2.31607 3.20435 2 4 2H8.438C9.10692 2.00007 9.75663 2.22371 10.2839 2.63536C10.8111 3.04701 11.1857 3.62307 11.348 4.272L11.782 6H20C20.7956 6 21.5587 6.31607 22.1213 6.87868C22.6839 7.44129 23 8.20435 23 9V19C23 19.7956 22.6839 20.5587 22.1213 21.1213C21.5587 21.6839 20.7956 22 20 22H4C3.20435 22 2.44129 21.6839 1.87868 21.1213C1.31607 20.5587 1 19.7956 1 19V5ZM3 9V19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20H20C20.2652 20 20.5196 19.8946 20.7071 19.7071C20.8946 19.5196 21 19.2652 21 19V9C21 8.73478 20.8946 8.48043 20.7071 8.29289C20.5196 8.10536 20.2652 8 20 8H4C3.73478 8 3.48043 8.10536 3.29289 8.29289C3.10536 8.48043 3 8.73478 3 9ZM9.72 6H4C3.65 6 3.313 6.06 3 6.17V5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H8.438C8.66093 4.00001 8.87746 4.0745 9.05321 4.21166C9.22895 4.34881 9.35383 4.54075 9.408 4.757L9.72 6Z"
            fill="black"
          />
        </svg>

        افزایش موجودی کیف پول
      </strong>
      <hr />
      <br />

      <span> موجودی فعلی:</span> <span>25.000.000 تومان</span>

      <div class="form-group flex items-center">
        <label class="w-[110px]" for="">میزان افزایش:</label>

        <input type="number" class="me-2 w-[170px] rounded" name="" id="" />

        <span>تومان</span>
      </div>
      <div class="merchant"></div>
      <span>انتخاب درگاه پرداخت:</span>
      <div class="merchantBox flex flex-wrap px-3 mt-3">
        <div
          class="merchantItem cursor-pointer relative w-[100px] p-1 border rounded bg-gray-100"
          v-for="item in merchantData"
          :key="item?.bank?.id"
          @click="setMerchant(item?.bank?.id)"
        >
          <!-- {{ item?.bank?.id }} -->
          <!-- {{ item?.bank?.picture?.url }} -->
          <div
            :class="`merchant-selected-${item?.bank?.id}`"
            class="merchant-svg hidden items-center justify-center absolute top-1 right-[-3px] bg-white h-[25px] shadow border rounded w-[25px] p-1"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 11.9995C3 10.8176 3.23279 9.64736 3.68508 8.55548C4.13738 7.46361 4.80031 6.4715 5.63604 5.63581C6.47177 4.80013 7.46392 4.13722 8.55585 3.68495C9.64778 3.23268 10.8181 2.9999 12 2.9999C13.1819 2.9999 14.3522 3.23268 15.4442 3.68495C16.5361 4.13722 17.5282 4.80013 18.364 5.63581C19.1997 6.4715 19.8626 7.46361 20.3149 8.55548C20.7672 9.64736 21 10.8176 21 11.9995C21 14.3863 20.0518 16.6754 18.364 18.3631C16.6761 20.0509 14.3869 20.999 12 20.999C9.61305 20.999 7.32387 20.0509 5.63604 18.3631C3.94821 16.6754 3 14.3863 3 11.9995ZM12 1C5.925 1 1 5.92476 1 11.9995C1 18.0742 5.925 22.9989 12 22.9989C18.075 22.9989 23 18.0742 23 11.9995C23 5.92476 18.075 1 12 1ZM16.8 8.59963C16.8788 8.49458 16.9361 8.37504 16.9687 8.24783C17.0013 8.12062 17.0085 7.98824 16.99 7.85825C16.9714 7.72825 16.9274 7.60319 16.8605 7.49019C16.7936 7.3772 16.7051 7.27849 16.6 7.1997C16.4949 7.12091 16.3754 7.06358 16.2482 7.03099C16.121 6.9984 15.9886 6.99119 15.8586 7.00976C15.7286 7.02833 15.6035 7.07232 15.4905 7.13923C15.3775 7.20613 15.2788 7.29464 15.2 7.39969L9.892 14.4773L7.707 12.2925C7.5184 12.1103 7.2658 12.0095 7.0036 12.0118C6.7414 12.0141 6.49059 12.1192 6.30518 12.3046C6.11977 12.49 6.0146 12.7408 6.01233 13.003C6.01005 13.2652 6.11084 13.5178 6.293 13.7064L9.293 16.7062C9.3943 16.8075 9.51618 16.8859 9.6504 16.936C9.78461 16.9861 9.92802 17.0067 10.0709 16.9966C10.2138 16.9864 10.3529 16.9457 10.4787 16.8772C10.6044 16.8086 10.714 16.7138 10.8 16.5992L16.8 8.59963Z"
                fill="black"
              />
            </svg>
          </div>
          <img class="w-full" :src="showImageBaseUrl + item?.bank?.picture?.url" alt="" />
          <span class="text-sm text-center block mt-1">
            {{ item?.bank?.name }}
          </span>
        </div>
      </div>

      <button class="payment bg-green-700 hover:bg-green-800 text-white w-full rounded">
        پرداخت
      </button>
    </div>
  </div>
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

const merchantData = ref();

onMounted(() => {
  getMerchant();
});

const getMerchant = async () => {
  try {
    const response = await $fetch("/api/cart/merchant", {
      method: "GET",
    });
    console.log("========= merchant ==========");
    console.log(response);
    merchantData.value = response.list;

    if (response.totalCount == 1) {
      setMerchant(merchantData.value[0].bank.id);
    }
  } catch (error) {
    console.log(error);
  }
};

const setMerchant = async (id) => {
  const merchants = document.querySelectorAll(".merchant-svg");

  for (let index = 0; index < merchants.length; index++) {
    merchants[index].classList.remove("flex");
    merchants[index].classList.add("hidden");
  }

  try {
    cartBody.value.returnCart = true;
    cartBody.value.cartUpdateType = 8;
    cartBody.value.merchantId = id;
    const response = await $fetch("/api/cart/cart", {
      method: "POST",
      body: cartBody.value,
    });
    console.log(response);
    if (response.isSuccess) {
      document.querySelector(`.merchant-selected-${id}`).classList.add("flex");
      document.querySelector(`.merchant-selected-${id}`).classList.remove("hidden");
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.tbl_header {
  position: sticky;
  top: 10px;
  z-index: 1000;
}
.orderBox {
  display: none;
}
.active {
  display: flex;
}

.product-img img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.btn-box {
  .btn {
    background-color: #e3e3e3;
    margin: 10px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;

    &.active {
      background: linear-gradient(180deg, #0267ff 0%, #003686 100%);
      color: #fff;
    }
  }
}

.info-box {
  border: 1px solid #3333;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 10px;
  line-height: 33px;
  // width: 850px;

  & > div:nth-child(2n) {
    .info-line,
    .orderBox {
      background-color: rgb(221, 221, 221) !important;
    }
  }

  .info-item {
    span {
      &:first-child {
        color: #848484;
        margin-left: 10px;
      }
    }
  }

  .info-line {
    min-height: 50px;
    border: 1px solid #3333;
    transition: 0.2s;

    &:hover {
      border-color: #cba12c;
      box-shadow: 0 0 5px -2px #3333;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 5px;

      img {
        width: 80px;
        height: 80px;
        border: 1px solid #3333;
      }

      span {
        font-size: 13px;
      }
    }
  }
}

.infoBoxContainer {
  overflow: auto;
}
@media only screen and (max-width: 600px) {
  .btn-box .btn {
    margin: 4px;
  }
}
@media only screen and (max-width: 1200px) {
  .profileContainer {
    overflow: auto;
  }
}

.storeName {
  background: #cba12c;
  padding: 0 15px;
  height: 30px;
  border-radius: 5px;
}
@media only screen and (max-width: 991px) {
  .profileContainer {
    height: 350px;
  }
  .info-box .info-line > div {
    padding: 0;
  }
}
</style>
