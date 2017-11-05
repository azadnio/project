
    <div ng-if="!itemListView">
        <ch-item ng-repeat="item in items | filter: {categoryId: categoryId}" 
             url="item.images[0]" id="item.id" description="item.description" categoryid="item.categoryId" name="item.name" price="item.price"></ch-item>
    </div>
    <div ng-if="itemListView">
        <table cellspacing="0" cellpadding="0">
            <tr>
                <th></th>
                <th></th>
                <th>
                    <ch-table-sort sort="sort" value="id" reverse="reverse" text="ID"></ch-table-sort>
                </th>
                <th>
                    <ch-table-sort sort="sort" value="description" reverse="reverse" text="Item"></ch-table-sort>
                </th>
                <th>Price</th>
                <th>Status</th>
                <th>Description</th>
                <th></th>
            </tr>
            
            <tr ng-class-even="even-row" ng-class-odd="odd-row" ng-repeat="item in items |orderBy:sort:reverse | filter: {categoryId: categoryId} | filter : {status:filterItem.status} track by $index" >
                <td>{{$index}}</td>
                <td><img class="item-image-small" ng-src="{{$parent.imageFolderPath + item.images[0]}}"></td>
                <td><a href="./#/items/{{item.categoryId}}/{{item.id}}">{{item.id}}</a></td>
                <td>{{item.item}}</td>
                <td>{{item.price}}</td>
                <td>{{(item.status === 0)?'Deleted':'Active'}}</td>
                <td><span class="item-description">{{item.description}}</span></td>
                <th ng-if="user === 'customer'"><input type="number" min="1"><button>Add to Order</button></th>
                <th ng-if="user !== 'customer'"></th>
                
            </tr>
                    
        </table>
    </div>
