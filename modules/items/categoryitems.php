
<div ng-if="!itemListView">
    <ch-item ng-repeat="item in locks" 
             url="item.images[0]" itm="item" id="item.id" description="item.description" categoryid="item.categoryId" name="item.name" price="item.price"></ch-item>
</div>
<table class="item-list-table" cellspacing="0" cellpadding="0" ng-if="itemListView">
    <tr class="table-header">
        <th></th>
        <th></th>
        <th><ch-table-sort sort="sort" value="id" reverse="reverse" text="ID"></ch-table-sort></th>
<th style="width: 28%;">
<ch-table-sort sort="sort" value="description" reverse="reverse" text="Name"></ch-table-sort>
</th>
<th style="width: 10%;">Price</th>
<th>Status</th>
<th>Description</th>
<th></th>
</tr>

<tr ng-class-even="even-row" ng-class-odd="odd-row" ng-repeat="item in items |orderBy:sort:reverse | filter: {categoryId: categoryId} | filter : {status:filterItem.status} track by $index" >
    <td>{{$index}}</td>
    <td><img class="item-image-small" ng-src="{{$parent.imageFolderPath + item.images[0]}}"></td>
    <td style="width: 8%;"><a href="./#/items/{{item.categoryId}}/{{item.id}}">{{item.id}}</a></td>
    <td>{{item.item}}</td>
    <td>Rs. {{item.price}}</td>
    <td>{{(item.status === 0)?'Deleted':'Active'}}</td>
    <td><span class="item-description">{{item.description}}</span></td>
    <th ng-if="user === 'customer'"><input type="number" min="1"><button>Add to Order</button></th>
    <th ng-if="user !== 'customer'"></th>
    
</tr>

</table>

