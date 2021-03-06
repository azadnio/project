<?php
    
    require_once './dbconnection.php';

    //manipulate all user actions received from front end
    class userProvider{
        
        public function saveCustomer($data, $isNew = true){
            
            $customer = new customer();
            $customer->setCity($data->city);            $customer->setCreditlimit($data->creditLimit);
            $customer->setEmail($data->email);          $customer->setImage($data->image);
            $customer->setAdress($data->address);       $customer->setMobile($data->mobile);
            $customer->setName($data->name);            $customer->setNic($data->nic);
            $customer->setPassword($data->password);    $customer->setTelephone($data->telephone);
            $customer->setUsername($data->userName);    $customer->setUserid($data->userId);
            
            //save new customer
            if($isNew)
                return $customer->insertToDataBase();
            //update existing customer
            else{
                $customer->setId($data->$id);
                return $customer->updateCustomer();
            }
                
        }
        
        //looad all customers
        public function loadAllCustomers(){
            
            //query select all customers TO DO
            $dbCon = new dbConnection();
            $rows = $dbCon->executeSelectQuery("SELECT * from customer");
            
            $return = [];
            while($row = mysqli_fetch_assoc($rows) ){
                $rowData = [];
                $rowData['id']    = $row['id'];
                $rowData['name']  = $row['name'];
                $rowData['city']  = $row['city'];
                $rowData['status']= $row['status'];
                $rowData['mobile']= $row['mobile'];
                
                $rowData['unclearedCheques']= 2;
                $rowData['returnedCheques'] = 3;
                $rowData['paymentBalance']  = 1;
                $rowData['creditLimit']     = 2;
                
                array_push($return, $rowData);
            }
                        
            //send as a JSON result to caller
            return json_encode($return);            
        }
        
        //load customer data of selected id
        public function getCustomer($id){
            
            $result = [];//status notify to front end
            $customer = new customer();
            if($customer->create($id)){
                //add customer details into result array
                $result['customer'] = array(
                    'city'      => $customer->getCity(),        'creditLimit'   => $customer->getCreditlimit(), 
                    'email'     => $customer->getEmail(),       'image'         => $customer->getImage(),
                    'address'   => $customer->getAdress(),      'mobile'        => $customer->getMobile(),
                    'name'      => $customer->getName(),        'nic'           => $customer->getNic(),
                    'telephone' => $customer->getTelephone(),   'userId'        => $customer->getUserid()
                );
                
                //load customer payment balance and returned cheques amounts
                
                //updatae result status
                $result['status'] = true;
            }
            else{
                
                $result['status'] = false;
                $result['message'] = 'Customer Not Found';
            }
            
            return json_encode($result);
        }
        
        
    }
    
    class user {
        
        //generic private properties
        private $username = 'd';  private $password = 'd';
        private $name = 'df';      private $status = 1;
        private $id = 'a';        private $userId = 'sd';// the admin user who registered this user/customer
        
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
        
        public function saveUserImageIntoDiretory(){
            
            //save or update existing user image
            
            try{
                $pos  = strpos($this->image, ';');
                $type = explode('/', substr($this->image, 0, $pos))[1];     

                $imageName = $this->getId() . '.' . $type;
                $ifp = fopen("../assets/images/users/". $imageName, 'wb' );
                $data = explode( ',', $this->image );
                fwrite( $ifp, base64_decode( $data[ 1 ] ) );
                $this->setImage($imageName);

                // clean up the file resource
                fclose( $ifp ); 
            }
            catch(Exception $e){}
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
            return $this->userId;
	}

	public function setUserid($userid){
            $this->userId = $userid;
	}
    }
    
    class customer extends user{
        
        //properties
        private $adress = 'ad';        private $city = 'asdf';
        private $telephone = 'dgg';    private $nic ='asfg';
        private $mobile ='adf';        private $creditlimit = 1451;
        private $image = '';
        
        //load customer data from database
        public function create($_id) {
            
            //connection object
            $con = $this->dbCon->getcon();
            
            //using mysqli prepare function to avoid sql injection
            $stmt = $con->prepare("SELECT * FROM `customer` WHERE `id` = ?");
            $stmt->bind_param('s', $id);
            
            //set refrence variable values
            $id= $_id;
                        
            $stmt->execute();
            $result = $stmt->get_result();
            if($result->num_rows == 0) 
                return false;
            
            $data = $result->fetch_assoc();
            
            $this->setCity($data['city']);            $this->setCreditlimit($data['creditlimit']);
            $this->setEmail($data['email']);          $this->setImage($data['image']);
            $this->setAdress($data['address']);       $this->setMobile($data['mobile']);
            $this->setName($data['name']);            $this->setNic($data['nic']);
            $this->setPassword($data['password']);    $this->setTelephone($data['telephone']);
            $this->setUsername($data['username']);    $this->setUserid($data['userid']);
            $this->setId($data['id']);                $this->setStatus($data['status']);

            return true;
//            while ($myrow = $result->fetch_assoc()) {
//
//                // use your $myrow array as you would with any other fetch
//                printf("%s is in district %s\n", $city, $myrow['district']);
//
//            }
        }


        //insert customer into data base
        function insertToDataBase(){
            
            //connection object
            $con = $this->dbCon->getcon();
                        
            //set id
            $this->setId($this->dbCon->getTableNextUniqueId('customer', 'C'));
            
            //save the image file into the directory
            if(isset($this->image) && trim($this->image) !== '' ){
                
                $this->saveUserImageIntoDiretory();
            }
            else{
                //no image so delete existing
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
        
        function updateCustomer(){
            
                 
            if($this->dbCon->checkTableHasThisId($this->getId(), 'customer')){
                
                //connection object
                $con = $this->dbCon->getcon();
                
                try{
                    
                    //save the image file into the directory
                    if(isset($this->image) && trim($this->image) !== '' ){

                        $this->saveUserImageIntoDiretory();
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
                catch(ErrorException $e){
                    
                    
                }
                
                $result['status'] = true;
            }
            else{
                $result['status'] = false;
                $result['message'] = 'Customer not found. UserId: ' .$this->getId();
            }
            
            return json_encode($result);
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