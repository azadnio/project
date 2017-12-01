<div class="item-view item-edit" ng-controller="itemcontroller">
    
    <h2 style="margin: 10px 0;">
        <span>ADD NEW ITEM</span> {{item.id}}      
    </h2>
    
    <label>
        <span>Item Name:</span> 
        <input type="text" ng-model="item.name">        
    </label>
    
    <label>
        <span>Item Price: </span> 
        <input type="text" ng-model="item.price">        
    </label>
    
    <label>
        <span>Item Category:</span> 
        <input list="categories" ng-model="item.category">
        <datalist id="categories">            
            <option ng-repeat="item in categories" value="{{item.category}}"></option>
        </datalist>
        <i class="fa fa-pencil-square fa-lg" aria-hidden="true" title="Rename category"></i>
    </label>
    
    <label>
        <span>Description: </span>
        <textarea ng-model="item.description" style="min-height: 60px;"></textarea>
    </label>
    
    <label>
        <span>Pictures (max 4): </span>  
        <input id="item-image-upload" onchange="angular.element(this).scope().selectImageFile(this)" accept="image/*" type="file" id='item-image-select-file'>
        
    </label>
    
    <div class="edit-images-wrap">
        <div class="item-edit-image" ng-repeat="image in item.images">
            <span class="modal-dialog-close" ng-click="deleteImage(image)">X</span>
            <img ng-src='{{(image.bs64)?image.bs64 : ($parent.imageFolderPath + image.url)}}'/>
        </div>  
    </div>
    
    <div class="promotion-wrap">
        <fieldset style="display: inline-block;    display: inline-block;
    border-color: green;
    color: green;
    font-weight: bold;">
            <legend><input type="checkbox" ng-model="item.promoted">Promote as sale offer</legend>
            <label>
            <span>Old Price: </span> 
            <input type="text" ng-model="item.promotionPrice">        
        </label>
        <label>
            <span>Pormotion text: </span>
            <textarea ng-model="item.promotionDescription" style="min-height: 50px;"></textarea>
        </label>
        </fieldset>
        
    </div>
    
    <div class="footer" style="margin-top: 5px; text-align: right;">
        <button class="btn red-btn" ng-click="close()">Back</button> 
        <button class="btn gray-btn" ng-click="clear()">Clear</button> 
        <button class="btn blue-btn" ng-click="save()">Save</button>
    </div>
</div>
