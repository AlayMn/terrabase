$(function() {
	
	switch(menu) {
	
	
	case 'About Us':
	  $('#about').addClass('active');
	  break;
	case 'Contact Us':
		$('#contact').addClass('active');
	break;
	case 'All Products':
		$('#listProducts').addClass('active');
	break;
	case 'Manage Products':
		$('#manageProducts').addClass('active');
	break;
		
	default:
		    if(menu == "Home") break;
			$('#listProducts').addClass('active');
	        $('#a_'+menu).addClass('active');
	        break;
	
	}
	
	
	
    
    
    //dismissing the alert after 3 seconds
    var $alert = $('.alert');
    if($alert.length) {
    	
    	setTimeout(function() {
    		$alert.fadeOut('slow');
    	} , 3000)
    }
	
   
    
    
  
 	
     var $table = $('#productListTable');
     
     // execute the below code only where we have this table
     if($table.length)
     	{

     	var jsonUrl = window.contextRoot + '/json/data/all/products';
     
     	
     	
     	
     		$table.DataTable( {
     			lengthMenu: [[10, 30, 50 ,-1], ['10 Records', '30 Records', '10 Records', 'All']],
     			pageLength: 5,
     			ajax: {
     				url: jsonUrl,
     				dataSrc:''
     			},
     			columns: [
     				
     				{
     					data: 'id',
     					mRender: function(data, type, row) {
     						return '<img src="'+window.contextRoot+'/resources/images/'+data+'.jpg"'
     					}
     				},
     				{
     					data: 'name'
     					
     				},
     				{
     					data: 'brand'
     				},
     				{
     					data: 'unitPrice',
     					mRender: function(data, type, row) {
     						 return '&#8360; ' + data
     					}
     				},
     				{
     					data:'quantity'
     				},
     				{
     					data: 'id',
     					bSortable: false,
     					mRender: function(data, type, row){
     						
     						var str = '';
     			str += '<a href="'+window.contextRoot+ '/show/'+data+'/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"</span></a> &#160';
     			str += '<a href="'+window.contextRoot+ '/cart/add/'+data+'/product" class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart"</span></a>';
     						
     						return str;
     					}
     				}
     				
     				
     			]

     			
     		})
     	
     	
     	  
     	}
     
    
    
    
    
    
    
    // data table for admin
    
   var $adminProductsTable = $('#adminProductsTable');
    
    // execute the below code only where we have this table
    if($adminProductsTable.length)
    	{

    	var jsonUrl = window.contextRoot + '/json/data/admin/all/bricks';
   // 	var jsonUrl2 = window.contextRoot + '/json/data2/admin/all/suppliers';
        
    
    		$adminProductsTable.DataTable( {
    			lengthMenu: [[10,30,50,-1], ['10 Records', '30 Records', '50 Records', 'All']],
    			pageLength: 30,
    			ajax: {
    				url: jsonUrl,
    				dataSrc:''
    			},
    			columns: [
    				
    				{
    					data: 'id'
    					
    				},
    				
    			/*	{
    					data: 'code'
			        },
    				*/
    				{
    					data: 'supplier_name'
    					
    				},
    				
    		/*		{
						data2: 'id',
						bSortable: false,
						mRender:function(data,type,row)
						{
							
							data2: 'name'
							
							
						}
				},*/
    				
    				{
    					data: 'challan_no'
    				},
    				
    				{
    					data: 'category'
    				},
    				
    				{
    					data: 'truck_no'
    				},
    				
    				{
    					data: 'mhl'
    				},
    				
    				
    				{
    					data:'quantity'
    					
    				},
    				{
    					data: 'rate'
    				},
    				
    				{
    					data:'date'
    					
    				},
    				
    				{
    					data:'amount'
    					
    				},
    				
    				{
    					data:'paid_amount'
    					
    				},
    				
    				{
    					data:'outstanding'
    					
    				},
    				
					{
						data: 'id',
						bSortable: false,
						mRender:function(data,type,row)
						{
							
							var str = '';
							
							str += '<a href="'+window.contextRoot+'/manage/'+data+'/brick" class="btn btn-warning">';
						 	str +=  '<span class="glyphicon glyphicon-pencil"></span></a>';
						  	
							return str;
							
							
						}
				}
				
    				
    				
    				/*,
    				
					{
						data: 'id',
						bSortable: false,
						mRender:function(data, type,row)
						{
							
							var str = '';
							
							
							str += '<a href="'+window.contextRoot+'/manage/'+data+'/product" class="btn btn-warning">';
						  	str +=  '<span class="glyphicon glyphicon-pencil"></span></a>';
						  	
							return str;
							
							
						}
				}*/
    				
    			
    			],

                "footerCallback": function ( row, data, start, end, display ) {
                    var api = this.api(), data;
         
                    // Remove the formatting to get integer data for summation
                    var intVal = function ( i ) {
                        return typeof i === 'string' ?
                            i.replace(/[\$,]/g, '')*1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
         
                    // Total over all pages
                  /*  total = api
                        .column( 5 )
                        .data()
                        .reduce( function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0 );*/
         
                    // Total over this page
                    quanTotal = api
                        .column( 5, { page: 'current'} )
                        .data()
                        .reduce( function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0 );
                    
                    paidTotal = api
                    .column( 7, { page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0 );
                    
         
                    // Update footers
                    $( api.column( 5 ).footer() ).html(
                        ''+quanTotal /*+' ( '+ total +' total)'*/
                    );
                    $( api.column( 7 ).footer() ).html(
                            ''+paidTotal /*+' ( '+ total +' total)'*/
                        );
                }
            
    			
    		
    		});
    	
    	}
    
    
   
	
});