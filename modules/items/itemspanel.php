<div class="flex">
    
    <div class="left-view-panel">            
        <div class="header">Categories</div>    
        <div class="vertical-menu">   
            <a ng-repeat="item in categories | orderBy:'category'" ng-href="./#/items/{{item.categoryId}}" ng-class="{'selected-category': categoryId == item.categoryId}" >{{item.category}}</a>
            <!--<a ng-repeat="item in items | unique : 'category'" ng-href="./#/items/{{item.categoryId}}" ng-class="{'selected-category': categoryId == item.categoryId}" >{{item.category}}</a>-->
        </div>
            
    </div>
        
    <div class="right-selected-panel">
        <fieldset  ng-hide="itemId">
            <legend>Items</legend>
            <label>
                <a href="" ng-click="toggleView()"><i class="fa" ng-class="{'fa-th-large': itemListView, 'fa-list' : !itemListView}" aria-hidden="true" title="Toggle views"></i></a>
            </label>
            <label>
                Name :
                <input type="text">
            </label>
            <label ng-if="$parent.user == 'admin'">
                <input type="checkbox" ng-model="filterItems.status" ng-value-true="" ng-value-false="1">
                Include deleted
            </label>
            <button style="margin-left: 55px;">ADD NEW ITEM</button>
        </fieldset>
        <div ng-include="view" class="views"></div>
    </div>
        
</div>