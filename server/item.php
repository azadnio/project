<?php

require_once './dbconnection.php';

//manipulate all items related actions received form front end
class itemsProvider{
    
    function addNewItem($data){
        
        $item = new item();
        $item->setName($data->name);            $item->setDescription($data->description);
        $item->setPrice($data->price);          $item->setImages($data->images);
        
        //set category details
        if(isset($data->categoryId))
            $item->setCategoryId($data->categoryId);
        $item->setCategoryDescription($data->category);
        
        return $item->insertToDataBase();
    }
}


class item{
    
    private $id = '';           private $name= 'test';
    private $description = '';  
    private $price = 78;        private $userId= '1';
    private $status = 1;        private $images = '';
    
    //generic public properties
    public $dbCon;
    private $category;
    
    
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
        $catId      = $this->getCategoryId();
        $catDesc    = $this->getCategoryDescription();
        if((!isset($catId) || trim($catId) === '')  && trim($catDesc) !== ''){
            if(!$this->category->isCategoryExists())
                $this->category->insertCategory();
        }
        
        
        //save the image file into the directory
        if(isset($this->images)){
            
            $i      = 1;
            $image  = '';
            foreach ($this->images as $value) {
                
                //newly added items has bs64 property
                if(isset($value->bs64)){
                    
                    //get the type
                    $pos  = strpos($value->bs64, ';');
                    $type = explode('/', substr($value->bs64, 0, $pos))[1];   

                    //add the image file into folder
                    $imgeFileName = $this->getId() .'-'. ($i++) . '.' . $type;
                    $ifp = fopen("../assets/images/items/$imgeFileName", 'wb' );
                    $data = explode( ',', $value->bs64 );
                    fwrite( $ifp, base64_decode( $data[ 1 ] ) );
                    
                    $image .= $imgeFileName . '|';//add the seperator
                }                
            }
            
            //remove the last seperator & set combined image names
            $this->images =  rtrim($image,'|'); 
        }
        

        //using mysqli prepare function to avoid sql injection
        $stmt = $con->prepare('INSERT INTO `items`(`id`, `name`, `catid`, `price`, `description`, '
                . '`lastmodifieduser`, `status`, `images`) VALUES (?,?,?,?,?,?,?,?)');

        //set perameters
        $stmt->bind_param('sssdssis', $id, $name,$catid,$price,$description,$userid, $status, $images);

        //set refrence variable values
        $id         = $this->id;                $name       = $this->name;
        $catid      = $this->category->getId(); $price      = $this->price;
        $description= $this->description;       $userid     = $this->userId;   
        $status     = $this->status;            $images     = $this->images;        

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

    public function setCategoryDescription($desc){
        return $this->category->setDescription($desc);
    }
    
    public function getCategoryDescription(){
        return $this->category->getDescription();
    }
    
    public function setCategoryId($id){
        $this->category->setId($id);
    }
    
    public function getCategoryId(){
        return $this->category->getId();
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
        $this->id = $db->getTableNextUniqueId('item-category', 'CT');
        
        return $db->executeNonQuery("INSERT INTO `item-category` (`id`, `description`) VALUES ('$this->id','$this->description')");
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

//UNIT TEST CODES
//$d = new itemCategroy();
//var_dump($d->insertCategory('vamsi'));