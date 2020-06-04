<template>
  <div>
    <h1>发货</h1>

    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "发货日期",
    dataIndex: "ShipTime",
    key: "shiptime"
  },
  {
    title: "客户名称",
    dataIndex: "ClientName",
    key: "ClientName"
  },
  {
    title: "超期多少天",
    dataIndex: "OverDay",
    key: "OverDay"
  },
  {
    title: "产品编码",
    dataIndex: "ProductCode",
    key: "ProductCode"
  },
  {
    title: "产品名称",
    dataIndex: "ProductName",
    key: "ProductName"
  },
  {
    title: "发货仓库",
    dataIndex: "ShipWarehouse",
    key: "ShipWarehouse"
  },
    {
    title: "发货数量",
    dataIndex: "ShipAmount",
    key: "ShipAmount"
  },
    {
    title: "计量单位",
    dataIndex: "MeasureUnit",
    key: "MeasureUnit"
  },
    {
    title: "包装数量",
    dataIndex: "PackAmount",
    key: "PackAmount"
  },
    {
    title: "包装单位",
    dataIndex: "PackUnit",
    key: "PackUnit"
  },
];

const data = [
  {
    key: "1",
    shiptime: '',
    ClientName:'',
    OverDay:'',
    ProductCode:'',
    ProductName:'',
    ShipWarehouse:'',
    ShipAmount:'',
    MeasureUnit:'',
    PackAmount:'',
    PackUnit:'',
  }
];

export default {
  data() {
    return {
      columns,
      data
    };
  },
  methods: {
    onSearch(value) {
      console.log(value);
    }
  }
};
</script>