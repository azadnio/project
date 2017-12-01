<?php
    
    require_once './dbconnection.php';

    //manipulate all user actions received from front end
    class userProvider{
        
        public function addNewCustomer($data){
            
            $customer = new customer();
            $customer->setCity($data->city);            $customer->setCreditlimit($data->creditLimit);
            $customer->setEmail($data->email);          $customer->setImage($data->image);
            $customer->setAdress($data->address);       $customer->setMobile($data->mobile);
            $customer->setName($data->name);            $customer->setNic($data->nic);
            $customer->setPassword($data->password);    $customer->setTelephone($data->telephone);
            $customer->setUsername($data->userName);    $customer->setUserid($data->userId);
           
            return $customer->insertToDataBase();
        }
        
    }
    
    class user {
        
        //generic private properties
        private $username = 'd';  private $password = 'd';
        private $name = 'df';      private $status = 1;
        private $id = 'a';        private $userid = 'sd';// the admin user who registered this user/customer
        
        //generic public properties
        public $dbCon;
        
        //constructor 
        public function __construct(){
            $this->dbCon = new dbConnection();
        }


        public function updateUsernamePassword(){
            
            if(isset($this->username) && isset($this->password)){
                
                //update username password
                
            }
        }
        
        
        //getters and setters for properties
        public function getUsername(){
            return $this->username;
	}

	public function setName($username){
            $this->name = $username;
	}
        
        public function getName(){
            return $this->name;
	}

	public function setUsername($username){
            $this->username = $username;
	}

	public function getPassword(){
            return $this->password;
	}

	public function setPassword($password){
            $this->password = $password;
	}

	public function getStatus(){
            return $this->status;
	}

	public function setStatus($status){
            $this->status = $status;
	}

	public function getId(){
            return $this->id;
	}

	public function setId($id){
            $this->id = $id;
	}

	public function getUserid(){
            return $this->userid;
	}

	public function setUserid($userid){
            $this->userid = $userid;
	}
    }
    
    class customer extends user{
        
        //properties
        private $adress = 'ad';        private $city = 'asdf';
        private $telephone = 'dgg';     private $nic ='asfg';
        private $mobile ='adf';        private $creditlimit = 1451;
        private $image = '';
        
        //insert customer into data base
        function insertToDataBase(){
            
            //connection object
            $con = $this->dbCon->getcon();
                        
            //set id
            $this->setId($this->dbCon->getTableNextUniqueId('customer', 'C'));
            
            //save the image file into the directory
            if(isset($this->image) && trim($this->image) !== '' ){
                
                //get the type
                $pos  = strpos($this->image, ';');
                $type = explode('/', substr($this->image, 0, $pos))[1];             
                $ifp = fopen("../assets/images/users/$uniqueId.$type", 'wb' );
                $data = explode( ',', $this->image );
                fwrite( $ifp, base64_decode( $data[ 1 ] ) );
                $this->setImage("$uniqueId.$type");
                
                // clean up the file resource
                fclose( $ifp ); 
    
            }
                        
            //using mysqli prepare function to avoid sql injection
            $stmt = $con->prepare('INSERT INTO `customer` '
                    . '(id, name, address, city, telephone, nic, mobile, creditlimit, username,'
                    . 'password, userid, image, email, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
            
            $stmt->bind_param('sssssssdsssssi', $id, $name,$adress,$city,$telephone,$nic,$mobile,$creditlimit,$username, $password, $userid, $iamge, $email, $status);

            //set refrence variable values
            $id         = $this->getId();       $name       = $this->getName();
            $adress     = $this->adress;        $city       = $this->city;
            $telephone  = $this->telephone;     $nic        = $this->nic;
            $mobile     = $this->mobile;        $creditlimit= $this->creditlimit;
            $username   = $this->getUsername(); $password   = $this->getPassword(); 
            $userid     = $this->getUserid();   $iamge      = $this->image;
            $email      = $this->email;         $status     = $this->getStatus();         
            
            return $stmt->execute();            
        }
        
        //getters and setters for properties
        public function getAdress(){
            return $this->adress;
	}

	public function setAdress($adress){
            $this->adress = $adress;
	}

	public function getCity(){
            return $this->city;
	}

	public function setCity($city){
            $this->city = $city;
	}

	public function getTelephone(){
            return $this->telephone;
	}

	public function setTelephone($telephone){
            $this->telephone = $telephone;
	}

	public function getNic(){
            return $this->nic;
	}

	public function setNic($nic){
            $this->nic = $nic;
	}

	public function getMobile(){
            return $this->mobile;
	}

	public function setMobile($mobile){
            $this->mobile = $mobile;
	}

	public function getCreditlimit(){
            return $this->creditlimit;
	}

	public function setCreditlimit($creditlimit){
            $this->creditlimit = $creditlimit;
	}

	public function getImage(){
            return $this->image;
	}

	public function setImage($image){
            $this->image = $image;
	}

	public function getEmail(){
            return $this->email;
	}

	public function setEmail($email){
            $this->email = $email;
	}
    }
    
//    $c= new customer();
//    echo $c->insertToDataBase();