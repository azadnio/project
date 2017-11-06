<div class="flex">
    
    <div class="left-view-panel">
        <div class="" ng-if="parentScope.user === 'admin'"><button>Add New</button></div>
            
        <div class="header">Categories</div>    
        <div class="vertical-menu">   
            <a ng-repeat="item in categories | orderBy:'category'" ng-href="./#/items/{{item.categoryId}}" ng-class="{'selected-category': categoryId == item.categoryId}" >{{item.category}}</a>
            <!--<a ng-repeat="item in items | unique : 'category'" ng-href="./#/items/{{item.categoryId}}" ng-class="{'selected-category': categoryId == item.categoryId}" >{{item.category}}</a>-->
        </div>
            
    </div>
        
    <div class="right-selected-panel">
        <fieldset  ng-hide="itemId">
            <legend>Filter items</legend>
            <label>
                <a href="" ng-click="toggleView()"><i class="fa" ng-class="{'fa-th-large': itemListView, 'fa-list' : !itemListView}" aria-hidden="true" title="Toggle views"></i></a>
            </label>
            <label>
                Description :
                <input type="text">
            </label>
            <label>
                ID : 
                <input type="text">
            </label>
            <label ng-if="$parent.user == 'admin'">
                <input type="checkbox" ng-model="filterItems.status" ng-value-true="" ng-value-false="1">
                Include deleted
            </label>
        </fieldset>
        <div ng-include="view" class="views"></div>
    </div>
        
</div>