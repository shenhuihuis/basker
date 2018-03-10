<template>
    <div>
        <div class="bread">
            <div class="htit">账号审批</div>
        </div>
        <div class="listbox">
            <table cellpadding=0 cellspacing=0>
            <thead>
                <td width="20%">申请时间</td>
                <td width="10%">申请单位</td>
                <td width="20%">单位类型</td>
                <td width="10%">法人</td>
                <td width="10%">联系号码</td>
                <td  width="30%">操作</td>
                </thead>
                <tbody>
                <tr>
                    <td>2018年02月20日</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>
                        <router-link :to="{name:'approve_details',params:{id:1}}">查看</router-link>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="page"></div>
        </div>   
    </div>
</template>
