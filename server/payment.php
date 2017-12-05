<?php
    
require_once './dbconnection.php';
    
class chequeProvaider{
    
    function addNewCheque($data){//$data - received from front end
        $chq = new cheque();
            
            
    }
        
    function updateCheque($data){//$data - received from front end
        
    }
        
    function setStatus($status, $returnReason){
        
        
    }
        
    function delete(){
        
        
    }
    
    function isAccountClosed($accountNo){
        //check in the database whether this account no in the account closed cheques
    }
}
    
class cheque{
    
    //properties
    private $id;            private $paymentId;
    private $date;          private $amount;
    private $bank;          private $accountNo;
    private $status;        private $remarks;
    private $userId; //last edited user
    private $chqNo;
    
    private $dbCon;
    
    public function __construct() {
        $this->dbCon = new dbConnection();
    }

    public function create($date, $ammount, $accountNo, $bank, $status, $chqueNo){
        
        $this->date         = $date;            $this->amount   = $ammount;
        $this->accountNo    = $accountNo;       $this->bank     = $bank;
        $this->status       = $status;          $this->chqNo    = $chqueNo;
        
        $this->id = $this->dbCon->getTableNextUniqueId('cheques', 'CQ');
    }
    
    //select the checque from database
    public function select($id){
        
    }

    public function insertToDataBase(){
        
        //connection object
        if(!isset($this->con))
            $this->dbCon = new dbConnection();
        
        $con = $this->dbCon->getcon();

        //set id
        if(!isset($this->id))
            $this->id  = $this->dbCon->getTableNextUniqueId('cheques', 'CQ');
    }
    
    public function update(){
        
    }
    
    public function changeStatus(){
        
    }
        
    private function addAsReturnedCheque(){
        
    }    
    


    //getters and setters
    
    
    
}
    
    
class payment{
    
    private $id;        private $cusId;
    private $date;      private $userId;
    private $type;      private $cashTotal;
    private $remarks;
    
    private $cheques = [];
    
    private $dbCon;
    
    function insertIntoDatabase(){
        
        //connection object
        if(!isset($this->con))
            $this->con = new dbConnection();
        
        $con = $this->dbCon->getcon();

        //set id
        $this->id  = $this->dbCon->getTableNextUniqueId('payment', 'P');
        
        //using mysqli prepare function to avoid sql injection
        $stmt = $con->prepare('INSERT INTO `payment` '
                . '(id, cusid, created-date, type, cash, remarks, user) VALUES (?,?,?,?,?,?,?)');
        //TO DO DATE FORMAT
        $stmt->bind_param('sssidss', $id, $cusid,$date,$type,$cash,$remarks,$user);

        //set refrence variable values
        $id     = $this->id;            $cusid      = $this->cusId; 
        $date   = $this->date;          $type       = $this->type;
        $cash   = $this->cashTotal;     $remarks    = $this->remarks; 
        $user   = $this->userId;
        
        
        //insert cheques
        foreach ($this->cheques as $value) {
            
            //set ccheque customerid and modified userId
            $value->setUser($this->userId);
            $value->setCusId($this->cusId);
            
            $value->insertIntoDatabase();
        }
        
    }
    
    
    
    function addCheque($date, $ammount, $accountNo, $bank, $status, $chqueNo){
        
        //add a new cheque into cheques array;
        $c = new cheque();
        $c->create($date, $ammount, $accountNo, $bank, $status, $chqueNo);
        array_push($this->cheques, $c);
    }
    
    //set getters and setters
}
    
//unit test codes
//$c = new cheque();
//$c->insertToDataBase();