<?php

require './dbconnection.php';

//manipulate all items related actions received form front end
class itemsProvider{
    
    function addNewItem(){
        
        $$item = new item();
            $$item->setName($data->name);            $item->setDescription($data->description);
            $$item->setCatid($data->category);       $$item->setPrice($data->price);
            $$item->setImages($data->images);      
           
            return $$item->insertToDataBase();
    }
}


class item{
    
    private $id = '';           private $name= 'test';
    private $description = '';  private $catid= '';
    private $price = 78;        private $userId= '';
    private $status = 1;        private $images = '';
    
     //generic public properties
    public $dbCon;

    //constructor 
    public function __construct(){
        $this->dbCon = new dbConnection();
    }
    
    //insert customer into data base
    function insertToDataBase(){

        //connection object
        $con = $this->dbCon->getcon();

        //create unique id (nth number of customer)
        $noOfRecords = $this->dbCon->countTableRecord('items');
        $uniqueId = 'I'.($noOfRecords + 1);

        //increse unique id by 1 if already exists
        while($this->dbCon->checkTableHasThisId($uniqueId, 'items'))
            $uniqueId = 'I'.($uniqueId + 1);

        //set id
        $this->setId($uniqueId);

        //get category id
        
        
        //save the image file into the directory
        if(isset($this->images) && is_array($this->images) ){
            $i = 0;
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
            $this->setImage("$uniqueId.$type");

            // clean up the file resource
            fclose( $ifp ); 

        }

        //using mysqli prepare function to avoid sql injection
        $stmt = $con->prepare('INSERT INTO `items`(`id`, `name`, `catid`, `price`, `description`, '
                . '`lastmodifieduser`, `status`, `images`) VALUES (?,?,?,?,?,?,?,?)');

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

    public function getCatid(){
        return $this->catid;
    }

    public function setCatid($catid){
        $this->catid = $catid;
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

//    $c= new item();
//    echo $c->insertToDataBase();