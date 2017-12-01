<?php

require_once './dbconnection.php';

//manipulate all items related actions received form front end
class itemsProvider{
    
    function addNewItem(){
        
        $item = new item();
        $item->setName($data->name);            $item->setDescription($data->description);
        $item->setPrice($data->price);          $item->setImages($data->images);
        
        //set category details
        if(isset($data->categoryId))
            $item->category->setId($data-categoryId);
        $item->category->setDescription($data->category);
        
        return $item->insertToDataBase();
    }
}


class item{
    
    private $id = '';           private $name= 'test';
    private $description = '';  
    private $price = 78;        private $userId= '';
    private $status = 1;        private $images = '';
    
    //generic public properties
    public $dbCon;
    public $category;
    
    
    //constructor 
    public function __construct(){
        $this->dbCon = new dbConnection();
        $this->category = new itemCategroy();
    }
    
    //insert customer into data base
    function insertToDataBase(){

        //connection object
        $con = $this->dbCon->getcon();

        //set id
        $this->setId($this->dbCon->getTableNextUniqueId('items', 'I'));

        
        //insert new catgory if not in data base
        if(!isset($this->category->getId()) && isset($this->category->getDescription())){
            if(!$this->category->isCategoryExists())
                $this->category->insertCategory();
        }
        
        
        //save the image file into the directory
        if(isset($this->images)){
            $i = 1;
            foreach ($this->images as $value) {
                
                //newly added items has bs64 property
                if(isset($value->bs64)){
                    
                    //get the type
                    $pos  = strpos($value->bs64, ';');
                    $type = explode('/', substr($value->bs64, 0, $pos))[1];   

                    //add the image file into folder
                    $ifp = fopen("../assets/images/items/$uniqueId.$type", 'wb' );
                    $data = explode( ',', $value->bs64 );
                    fwrite( $ifp, base64_decode( $data[ 1 ] ) );
                    $this->setImage("$uniqueId.$type");
                    
                    $i++;
                }
                
            }
        }
        
        if(isset($this->image) && trim($this->image) !== '' ){

            //get the type
            $pos  = strpos($this->image, ';');
            $type = explode('/', substr($this->image, 0, $pos))[1];   
            
            //add the image file into folder
            $ifp = fopen("../assets/images/users/$uniqueId.$type", 'wb' );
            $data = explode( ',', $this->image );
            fwrite( $ifp, base64_decode( $data[ 1 ] ) );
            $this->setImage("$uniqueId-$i.$type");

            // clean up the file resource
            fclose( $ifp ); 

        }

        //using mysqli prepare function to avoid sql injection
        $stmt = $con->prepare('INSERT INTO `items`(`id`, `name`, `catid`, `price`, `description`, '
                . '`lastmodifieduser`, `status`, `images`) VALUES (?,?,?,?,?,?,?,?)');

        //set perameters
        $stmt->bind_param('sssdssis', $id, $name,$catid,$price,$description,
                $userid, $status, $images);

        //set refrence variable values
        $id         = $this->getId();       $name       = $this->getName();
        $catid      = $this->catid;         $price      = $this->price;
        $description= $this->description;   $userid     = $this->getUserid();   
        $images      = $this->images;        $status     = $this->getStatus();         

        return $stmt->execute();            
    }
    
    


    
    //getters and setters
    public function getId(){
        return $this->id;
    }

    public function setId($id){
        $this->id = $id;
    }

    public function getImages(){
        return $this->images;
    }

    public function setImages($images){
        $this->images = $images;
    }
    
    public function getName(){
        return $this->name;
    }

    public function setName($name){
        $this->name = $name;
    }

    public function getDescription(){
        return $this->description;
    }

    public function setDescription($description){
        $this->description = $description;
    }

    public function getCategory(){
        return $this->category;
    }
    
    public function getPrice(){
        return $this->price;
    }

    public function setPrice($price){
        $this->price = $price;
    }

    public function getUserId(){
        return $this->userId;
    }

    public function setUserId($userId){
        $this->userId = $userId;
    }

    public function getStatus(){
        return $this->status;
    }

    public function setStatus($status){
        $this->status = $status;
    }
    
}

class itemCategroy{
    
    private $id;
    private $description;


    private $db;
    
    private function getConnection(){
        
        if(!isset($this->db))
            $this->db = new dbConnection();
        
        return $this->db;
    }
    
    function isCategoryExists(){
        
        $db = $this->getConnection();
        //check this category description exiss replace all spaces to make sure if there same category with spaces
        $id = $db->executeSelectSingleRecordQuery("SELECT id FROM `item-category` WHERE REPLACE(description,' ','') = REPLACE('$this->description',' ','')", 'id');
        
        return trim($id) !== '';
    }
    
    function insertCategory(){
        
        $db = $this->getConnection();
        $uniqueId = $db->getTableNextUniqueId('item-category', 'CT');
        
        return $db->executeNonQuery("INSERT INTO `item-category` (`id`, `description`) VALUES ('$uniqueId','$this->description')");
    }
    
    //check whether any item exists for this category
    function doesItemsExistsForCategory(){
        
        
        
    }
    
    //getters an setters
    public function getId(){
        return $this->id;
    }

    public function setId($id){
        $this->id = $id;
    }

    public function getDescription(){
        return $this->description;
    }

    public function setDescription($description){
        $this->description = $description;
    }
}

//$d = new itemCategroy();
//var_dump($d->insertCategory('vamsi'));