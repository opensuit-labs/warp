Search.setIndex({docnames:["index","modules/functions","modules/introduction","modules/runtime","modules/sim"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,sphinx:56},filenames:["index.rst","modules\\functions.rst","modules\\introduction.rst","modules\\runtime.rst","modules\\sim.rst"],objects:{"warp.HashGrid":[[3,1,1,"","build"],[3,2,1,"","device"],[3,2,1,"","id"]],"warp.Mesh":[[3,2,1,"","device"],[3,2,1,"","id"],[3,1,1,"","refit"]],"warp.Volume":[[3,2,1,"","CLOSEST"],[3,2,1,"","LINEAR"],[3,1,1,"","allocate"],[3,1,1,"","allocate_by_tiles"]],"warp.sim":[[4,0,1,"","Model"],[4,0,1,"","ModelBuilder"],[4,0,1,"","SemiImplicitIntegrator"],[4,0,1,"","State"],[4,0,1,"","XPBDIntegrator"]],"warp.sim.Model":[[4,2,1,"","body_com"],[4,2,1,"","body_count"],[4,2,1,"","body_inertia"],[4,1,1,"","collide"],[4,2,1,"","contact_count"],[4,2,1,"","edge_count"],[4,2,1,"","edge_indices"],[4,2,1,"","edge_rest_angle"],[4,1,1,"","flatten"],[4,2,1,"","joint_X_cm"],[4,2,1,"","joint_X_pj"],[4,2,1,"","joint_armature"],[4,2,1,"","joint_axis"],[4,2,1,"","joint_parent"],[4,2,1,"","joint_target"],[4,2,1,"","joint_target_kd"],[4,2,1,"","joint_target_ke"],[4,2,1,"","joint_type"],[4,2,1,"","particle_count"],[4,2,1,"","particle_inv_mass"],[4,2,1,"","particle_mass"],[4,2,1,"","particle_q"],[4,2,1,"","particle_qd"],[4,2,1,"","shape_body"],[4,2,1,"","shape_count"],[4,2,1,"","shape_geo_scale"],[4,2,1,"","shape_geo_src"],[4,2,1,"","shape_geo_type"],[4,2,1,"","shape_materials"],[4,2,1,"","shape_transform"],[4,2,1,"","spring_control"],[4,2,1,"","spring_count"],[4,2,1,"","spring_damping"],[4,2,1,"","spring_indices"],[4,2,1,"","spring_rest_length"],[4,2,1,"","spring_stiffness"],[4,1,1,"","state"],[4,2,1,"","tet_activations"],[4,2,1,"","tet_count"],[4,2,1,"","tet_indices"],[4,2,1,"","tet_materials"],[4,2,1,"","tet_poses"],[4,2,1,"","tri_activations"],[4,2,1,"","tri_count"],[4,2,1,"","tri_indices"],[4,2,1,"","tri_poses"]],"warp.sim.ModelBuilder":[[4,1,1,"","add_body"],[4,1,1,"","add_cloth_grid"],[4,1,1,"","add_cloth_mesh"],[4,1,1,"","add_edge"],[4,1,1,"","add_edges"],[4,1,1,"","add_muscle"],[4,1,1,"","add_particle"],[4,1,1,"","add_rigid_articulation"],[4,1,1,"","add_shape_box"],[4,1,1,"","add_shape_capsule"],[4,1,1,"","add_shape_mesh"],[4,1,1,"","add_shape_plane"],[4,1,1,"","add_shape_sphere"],[4,1,1,"","add_soft_grid"],[4,1,1,"","add_soft_mesh"],[4,1,1,"","add_spring"],[4,1,1,"","add_tetrahedron"],[4,1,1,"","add_triangle"],[4,1,1,"","add_triangles"],[4,1,1,"","compute_box_inertia"],[4,1,1,"","compute_capsule_inertia"],[4,1,1,"","compute_sphere_inertia"],[4,1,1,"","finalize"]],"warp.sim.State":[[4,2,1,"","body_q"],[4,2,1,"","body_qd"],[4,1,1,"","flatten"],[4,2,1,"","particle_q"],[4,2,1,"","particle_qd"]],warp:[[3,0,1,"","HashGrid"],[3,0,1,"","Mesh"],[3,0,1,"","Tape"],[3,0,1,"","Volume"],[1,3,1,"id3","abs"],[1,3,1,"","acos"],[1,3,1,"id130","add"],[3,0,1,"","array"],[1,3,1,"","asin"],[1,3,1,"","atan"],[1,3,1,"","atan2"],[1,3,1,"id65","atomic_add"],[1,3,1,"id74","atomic_max"],[1,3,1,"id71","atomic_min"],[1,3,1,"id68","atomic_sub"],[1,3,1,"","bvh_query_aabb"],[1,3,1,"","bvh_query_next"],[1,3,1,"","bvh_query_ray"],[3,3,1,"","capture_begin"],[3,3,1,"","capture_end"],[3,3,1,"","capture_launch"],[1,3,1,"","ceil"],[1,3,1,"id2","clamp"],[1,3,1,"","closest_point_edge_edge"],[3,0,1,"","constant"],[1,3,1,"","cos"],[1,3,1,"","cosh"],[1,3,1,"","cross"],[1,3,1,"id118","curlnoise"],[1,3,1,"id32","cw_div"],[1,3,1,"id30","cw_mul"],[1,3,1,"id24","determinant"],[1,3,1,"id28","diag"],[1,3,1,"id170","div"],[1,3,1,"id7","dot"],[3,3,1,"","empty"],[3,3,1,"","empty_like"],[1,3,1,"","exp"],[1,3,1,"id94","expect_eq"],[1,3,1,"id105","expect_near"],[1,0,1,"","float16"],[1,0,1,"","float32"],[1,0,1,"","float64"],[1,3,1,"","floor"],[1,3,1,"id171","floordiv"],[1,3,1,"","hash_grid_point_id"],[1,3,1,"","hash_grid_query"],[1,3,1,"","hash_grid_query_next"],[1,0,1,"","int16"],[1,0,1,"","int32"],[1,0,1,"","int64"],[1,0,1,"","int8"],[1,3,1,"","intersect_tri_tri"],[1,3,1,"id22","inverse"],[3,3,1,"","launch"],[1,3,1,"id11","length"],[1,3,1,"id14","length_sq"],[1,3,1,"id104","lerp"],[1,3,1,"","log"],[1,3,1,"","log10"],[1,3,1,"","log2"],[1,3,1,"id120","lower_bound"],[1,3,1,"id43","mat22"],[1,3,1,"id45","mat33"],[1,3,1,"id48","mat44"],[1,3,1,"id1","max"],[1,3,1,"","mesh_eval_face_normal"],[1,3,1,"","mesh_eval_position"],[1,3,1,"","mesh_eval_velocity"],[1,3,1,"","mesh_get"],[1,3,1,"","mesh_get_index"],[1,3,1,"","mesh_get_point"],[1,3,1,"","mesh_get_velocity"],[1,3,1,"","mesh_query_aabb"],[1,3,1,"","mesh_query_aabb_next"],[1,3,1,"","mesh_query_point"],[1,3,1,"","mesh_query_ray"],[1,3,1,"id0","min"],[1,3,1,"","mlp"],[1,3,1,"id166","mod"],[1,3,1,"id165","mul"],[1,3,1,"id178","neg"],[1,3,1,"id111","noise"],[1,3,1,"","nonzero"],[1,3,1,"id17","normalize"],[1,3,1,"id8","outer"],[1,3,1,"id114","pnoise"],[1,3,1,"","pow"],[1,3,1,"","print"],[1,3,1,"","printf"],[1,3,1,"id51","quat"],[1,3,1,"","quat_from_axis_angle"],[1,3,1,"","quat_from_matrix"],[1,3,1,"","quat_identity"],[1,3,1,"","quat_inverse"],[1,3,1,"","quat_rotate"],[1,3,1,"","quat_rotate_inv"],[1,3,1,"","quat_rpy"],[1,3,1,"","quat_slerp"],[1,3,1,"","quat_to_axis_angle"],[1,3,1,"","quat_to_matrix"],[1,3,1,"id106","rand_init"],[1,3,1,"id108","randf"],[1,3,1,"id107","randi"],[1,3,1,"","randn"],[1,3,1,"","rint"],[1,3,1,"","rotate_rodriguez"],[1,3,1,"","round"],[1,3,1,"","sample_cdf"],[1,3,1,"","sample_triangle"],[1,3,1,"","sample_unit_cube"],[1,3,1,"","sample_unit_disk"],[1,3,1,"","sample_unit_hemisphere"],[1,3,1,"","sample_unit_hemisphere_surface"],[1,3,1,"","sample_unit_ring"],[1,3,1,"","sample_unit_sphere"],[1,3,1,"","sample_unit_sphere_surface"],[1,3,1,"","sample_unit_square"],[1,3,1,"","select"],[1,3,1,"id4","sign"],[1,3,1,"","sin"],[1,3,1,"","sinh"],[1,3,1,"","skew"],[1,3,1,"","smoothstep"],[1,3,1,"","spatial_adjoint"],[1,3,1,"","spatial_bottom"],[1,3,1,"","spatial_cross"],[1,3,1,"","spatial_cross_dual"],[1,3,1,"","spatial_dot"],[1,3,1,"","spatial_jacobian"],[1,3,1,"","spatial_mass"],[1,3,1,"id59","spatial_matrix"],[1,3,1,"","spatial_top"],[1,3,1,"id58","spatial_vector"],[1,3,1,"","sqrt"],[1,3,1,"","step"],[1,3,1,"id139","sub"],[1,3,1,"","svd3"],[1,3,1,"","tan"],[1,3,1,"","tanh"],[1,3,1,"id62","tid"],[1,3,1,"id26","trace"],[1,3,1,"id52","transform"],[1,3,1,"","transform_get_rotation"],[1,3,1,"","transform_get_translation"],[1,3,1,"","transform_identity"],[1,3,1,"","transform_inverse"],[1,3,1,"","transform_multiply"],[1,3,1,"id53","transform_point"],[1,3,1,"id54","transform_vector"],[1,3,1,"id20","transpose"],[1,3,1,"","trunc"],[1,0,1,"","uint16"],[1,0,1,"","uint32"],[1,0,1,"","uint64"],[1,0,1,"","uint8"],[1,3,1,"","unot"],[1,3,1,"id35","vec2"],[1,3,1,"id38","vec3"],[1,3,1,"id41","vec4"],[1,3,1,"","volume_index_to_world"],[1,3,1,"","volume_index_to_world_dir"],[1,3,1,"","volume_lookup_f"],[1,3,1,"","volume_lookup_i"],[1,3,1,"","volume_lookup_v"],[1,3,1,"","volume_sample_f"],[1,3,1,"","volume_sample_i"],[1,3,1,"","volume_sample_v"],[1,3,1,"","volume_store_f"],[1,3,1,"","volume_store_i"],[1,3,1,"","volume_store_v"],[1,3,1,"","volume_world_to_index"],[1,3,1,"","volume_world_to_index_dir"],[3,3,1,"","zeros"],[3,3,1,"","zeros_like"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:function"},terms:{"0":[1,2,3,4],"1":[1,2,3,4],"10":[1,2,3,4],"100":[3,4],"1000":4,"100000":4,"1024":[2,3],"1024x16":3,"128":3,"128x128x3":3,"16":3,"1d":[1,3],"2":[1,2,3,4],"2002":4,"2018":4,"2d":[1,3],"2x2":[1,3],"3":[2,3,4],"32":1,"3d":[1,3],"3x3":[1,3,4],"4":[3,4],"4d":[1,3],"4x4":[1,3],"5":[3,4],"6":3,"60":4,"6d":[1,3],"6x6":[1,3],"7":4,"7d":3,"8x8x8":3,"abstract":3,"boolean":0,"byte":3,"case":[1,3],"class":[1,2,3,4],"default":[0,1,2],"do":[3,4],"enum":3,"export":3,"final":4,"float":[1,2,3,4],"function":[0,1,2,4],"import":[2,3,4],"int":[1,3,4],"long":3,"new":[1,2,3],"return":[1,2,3,4],"short":3,"static":[3,4],"switch":3,"true":[1,3],"try":3,"while":[1,3],A:[1,3,4],By:3,For:[2,3],If:[1,3,4],In:[1,3,4],It:[1,3,4],One:3,The:[1,3,4],Then:4,There:3,These:3,To:[2,3],__array_interface__:3,__cuda_array_interface__:3,ab:1,about:3,abov:[1,3],absolut:1,acceler:3,accept:[3,4],access:[2,3],accumul:3,accustom:3,achiev:2,aco:1,across:4,act:1,activ:[1,3,4],actuat:4,ad:4,add:[1,3,4],add_bodi:4,add_cloth_grid:4,add_cloth_mesh:4,add_edg:4,add_muscl:4,add_particl:4,add_rigid_articul:4,add_shape_box:4,add_shape_capsul:4,add_shape_mesh:4,add_shape_plan:4,add_shape_spher:4,add_soft_grid:4,add_soft_mesh:4,add_spr:4,add_tetrahedron:4,add_triangl:4,addit:3,addition:3,address:3,adj_input:3,adj_output:3,adjoint:3,advanc:[0,4],affin:[1,3],after:[1,3,4],against:[1,3],al:4,alia:[2,3],alias:3,align:[1,3],all:[1,2,3,4],alloc:[2,3],allocate_by_til:3,allow:[1,3],along:[1,3,4],alreadi:3,also:3,altern:[1,3],although:3,alwai:[3,4],an:[1,2,3,4],analog:3,anchor:4,angl:[1,4],ani:[1,2,3],anim:2,annot:2,anoth:[3,4],anyth:4,api:3,appli:[1,3],applic:[2,3],approach:[3,4],appropri:[2,3],ar:[1,2,3,4],arang:3,arbitrari:3,arbitrarili:3,arcco:1,arcsin:1,arctan:1,area:4,arg1:1,arg2:1,argument:[1,2,3],arithmet:0,arithmetr:3,armatur:4,around:[1,3,4],arr:1,arrai:[0,1,2,4],array2d:3,array3d:3,articul:4,articulation_build:4,artifici:4,asin:1,assembl:3,assign:3,assum:1,asynchron:[2,3],atan2:1,atan:1,atom:1,atomic_add:[1,3],atomic_max:1,atomic_min:1,atomic_sub:1,attach:3,attribut:[3,4],auto:3,automat:[1,2,4],avail:3,avoid:[2,3],awai:1,axi:[1,3,4],b:[1,2,3,4],back:[2,3],background:1,backpropag:1,backward:3,bary_u:1,bary_v:1,barycentr:[1,3],base:[1,3,4],basi:[1,4],basic:3,batch:[1,3],beam:4,becaus:3,been:[3,4],befor:[1,2,3],begin:3,behav:1,being:3,belong:[2,4],below:[2,3],bend:4,benefit:3,best:[2,3],between:[1,2,3,4],bg_valu:3,bia:1,bigger:3,bit:1,blender:3,block:[1,3],bodi:[1,3,4],body0:4,body_com:4,body_count:4,body_inertia:4,body_q:4,body_qd:4,bool:[1,3,4],bottom:[1,4],bound:[0,1],box:[1,3,4],breakpoint:3,bridson:4,bring:2,bucket:3,buffer:[2,3],bug:3,build:[2,3,4],builder:4,built:[0,3],bvh:[1,3],bvh_query_aabb:1,bvh_query_next:1,bvh_query_rai:1,bvh_query_t:1,byte_arrai:3,c0:1,c1:1,c2:1,c3:1,c4:1,c:[1,2,3,4],c_void_p:3,cach:2,calcul:1,call:[1,3,4],callabl:1,callback:4,can:[1,2,3,4],cannot:[2,3],capabl:3,capac:3,capsul:[3,4],captur:3,capture_begin:3,capture_end:3,capture_launch:3,care:3,cast:[1,3],cdf:1,ceil:1,cell:[3,4],cell_i:4,cell_x:4,cell_z:4,center:4,chain:[3,4],chang:[3,4],check:[0,1],child:4,choos:3,circuit:3,clamp:1,classmethod:3,clear_forc:4,clockwis:4,close:3,closer:1,closest:[1,3],closest_point_edge_edg:1,cloth:4,co:1,code:[2,3],coeffici:4,coher:1,collid:[3,4],collis:4,colloqui:1,color:3,column:1,com:4,combin:1,come:1,common:[3,4],commonli:3,compar:[1,3],comparison:0,compat:3,compil:[0,3],complet:3,complex:3,complex_kernel:3,compon:1,compont:1,compress:3,comput:[1,2,3,4],compute1:3,compute2:3,compute_box_inertia:4,compute_capsule_inertia:4,compute_inertia:[],compute_sphere_inertia:4,concaten:3,concept:3,concret:4,cond:1,condit:3,config:3,configru:4,configur:[3,4],conflict:3,conjug:1,connect:4,consid:1,consol:3,constant:[0,4],constraint:4,construct:[1,2,3,4],constructor:[1,2,3],contact:4,contact_body0:4,contact_body1:4,contact_count:4,contact_dist:4,contact_materi:4,contact_point0:4,contain:[1,3],content:[3,4],context:0,context_ptr:3,contrast:1,control:4,conveni:2,convent:3,convers:0,convert:[1,2,3,4],coordin:[1,3,4],copi:[2,3,4],correct:3,correctli:3,correspond:3,cosh:1,cosin:1,counter:4,cpu:[2,3,4],cpython:2,creat:[3,4],cross:1,ctype:3,cube:[1,3],cubic:1,cucontext:3,cuda:[0,2,4],cumul:1,cupi:0,curl:1,curlnois:1,current:[0,1,4],custom:0,cw_div:1,cw_mul:1,cylind:4,d:[1,3,4],damp:4,data:[0,2,4],datastructur:3,datatyp:3,dealloc:3,debug:0,debugg:3,declar:3,decompos:4,decor:[2,3],dedupl:3,def:[2,3],defin:[1,2,3,4],definit:[2,3,4],degener:1,delet:3,dem:3,dens:3,densiti:4,depend:4,deprec:3,depth:4,deriv:4,describ:[3,4],descript:4,design:[2,3,4],desir:4,dest:2,dest_arrai:3,detail:[0,3],detect:[3,4],determin:1,develop:3,devic:[0,2,4],device_arrai:[2,3],device_array_0:2,device_array_1:2,device_array_2:2,devicelik:3,diag:1,diagnos:3,diagon:[1,3],dictionari:[2,3],differ:[1,2,3],differenti:[0,2,4],difficult:3,dim:[1,2,3],dim_i:[3,4],dim_x:[3,4],dim_z:[3,4],dimens:[1,3],dimension:0,dir:1,direct:[1,3,4],directli:[3,4],discard:1,discret:3,disk:[1,3],dist:3,distanc:[1,3,4],distribut:1,div:1,diverg:1,divis:[1,3],dlpack:3,doe:[1,3,4],doesn:3,domain:3,done:2,dot:[1,2,3],doubl:3,down:3,download:2,driver:3,dt:4,dtype:[2,3],dual:1,dure:[1,3],dynam:[2,3,4],e:[1,2,3,4],each:[1,3,4],easi:[2,3],easili:3,edg:[1,3,4],edge0:1,edge1:1,edge_callback:4,edge_count:4,edge_indic:4,edge_k:4,edge_kd:4,edge_rest_angl:4,effect:3,effici:[3,4],either:[2,3],elast:4,element:[1,3,4],empti:[2,3],empty_lik:3,en:4,enabl:3,enclos:3,encod:1,encount:3,end:3,energi:4,enough:[3,4],ensur:[2,3],entir:3,entri:4,environ:3,epsilon:1,equal:[1,3,4],equat:4,equival:[1,3],error:[1,3],establish:3,et:4,etc:[2,3,4],euler:4,eval:2,evalu:[1,2,3],even:[1,3],everi:[3,4],exact:4,exampl:[0,3,4],example_funct:3,except:[2,3],execut:[2,3],exist:[1,2,3],exit:3,exp:1,expect:[3,4],expect_eq:1,expect_near:1,explicit:[3,4],explicitli:[2,3],exponenti:[1,3],expos:[2,3,4],express:[2,3],extens:[2,3],extent:4,extern:3,extract:1,f0:4,f:[1,3],face:[1,3,4],face_callback:4,factor:1,fail:3,fall:3,fals:[1,2,3,4],familiar:3,fast:2,faster:1,featur:[0,1,3],fem:[3,4],field:[1,3],file:3,find:[1,3],fine:3,finit:3,first:[1,2,3,4],fix:[1,3,4],fix_bottom:4,fix_left:4,fix_right:4,fix_top:4,flatten:[1,3,4],flip:4,float16:1,float32:[1,2,3],float64:[1,3],floor:[1,3],floordiv:1,flow:3,fluid:3,fold:3,folder:3,follow:[2,3,4],foo:3,footnot:1,forc:[3,4],form:[1,3,4],format:[1,3],forward:[3,4],found:1,four:4,fourth:4,foward:3,fraction:1,frame:4,framework:[1,2,3],free:[1,3],freeli:3,friction:4,from:[1,2,3,4],from_numpi:2,from_torch:3,front:1,full:[3,4],func:[1,3],fundament:3,futur:[3,4],g:[1,2,3,4],gen:3,gener:[1,2,3,4],geometr:3,geometri:[0,2,3,4],get:[2,3],get_devic:3,give:3,given:[1,3,4],global:[1,2,3],good:2,got:3,gpu:[2,3],grad:3,gradient:[1,3,4],grain:3,graph:[0,4],graphic:[2,3],greater:[1,3],grid:[0,1,4],ground:4,group:4,h:4,ha:[3,4],half:4,half_width:4,halfwai:1,handi:3,handl:3,hard:3,hash:[0,1],hash_grid_point_id:1,hash_grid_queri:[1,3],hash_grid_query_next:[1,3],hash_grid_query_t:1,hashgrid:3,have:[2,3],height:4,help:3,helper:[3,4],hemispher:1,hermit:1,hexahedr:4,hide:3,hierarchi:3,high:2,hint:3,hit:[1,3],hold:4,homogen:1,hood:3,host:[2,3],host_arrai:[2,3],host_array_0:2,host_array_1:2,host_array_2:2,houdini:3,how:3,howev:[2,4],http:4,hx:4,hy:4,hydrodynam:3,hz:4,i:[1,3,4],i_:1,i_m:4,id:[1,3],ident:1,identifi:[1,3],imaginari:1,immut:0,implement:[1,2,3,4],implicit:[3,4],implicit_euler_method:4,impos:3,includ:[2,3,4],inclus:3,incom:3,incompat:3,incred:3,independ:[3,4],index:[0,1,2,3,4],indic:[1,3,4],individu:3,inerti:1,inertia:[1,3,4],infer:[2,3],inform:3,init:[2,3],initi:[0,1,2,4],input:[1,2,3,4],input_buff:3,input_dim:3,insert:3,insid:[1,3],inspect:3,instal:0,instead:[2,3],instruct:2,int16:[1,3],int32:[1,3],int64:[1,3],int8:[1,3],integ:[1,3],integr:[0,3],intend:4,interact:3,interfac:3,interior:4,intermedi:3,intern:4,interop:0,interoper:3,interpol:[1,3],interpret:3,intersect:1,intersect_tri_tri:1,intrins:1,introduc:3,introduct:0,intuit:1,invalid:2,invers:[1,4],invok:3,involv:3,issu:3,item:1,iter:[1,3,4],its:[1,4],itself:3,ix:1,iy:1,iz:1,j:[1,3,4],j_out:1,j_start:1,jacobian:0,jax:0,jit:2,joint:4,joint_armatur:4,joint_axi:4,joint_count:[1,4],joint_limit_k:4,joint_limit_kd:4,joint_limit_low:4,joint_limit_upp:4,joint_par:[1,4],joint_prismat:4,joint_qd_start:1,joint_revolut:4,joint_start:1,joint_target:4,joint_target_k:4,joint_target_kd:4,joint_typ:4,joint_x_cm:4,joint_x_pj:4,joint_xform:4,joint_xform_child:4,k:[1,3,4],k_:4,k_damp:4,k_lambda:4,k_mu:4,kd:4,ke:4,keep:3,kernel:[0,2],kf:4,kinemat:4,kwarg:3,l:[1,3,4],laid:1,lambda:[2,4],lame:4,languag:0,larg:3,largest:1,latter:3,launch:[0,1,2],launch_kernels_to_be_differenti:3,layer:1,layout:1,lead:3,left:[1,4],length:[1,3,4],length_sq:1,lerp:1,less:[1,3],level:[2,4],li:4,librari:[1,2,3],lie:3,like:[1,3],limit:[3,4],line:3,linear:[1,2,3],linearli:1,list:[2,3,4],littl:3,live:[2,3],lm:4,lmax:4,load:[2,3],load_from_nvdb:3,local:[1,3,4],locat:[1,3,4],log10:1,log2:1,log:1,lookup:3,loop:[3,4],loss:3,low:3,lower:[1,3,4],lower_bound:1,lt:4,m00:1,m01:1,m02:1,m03:1,m10:1,m11:1,m12:1,m13:1,m20:1,m21:1,m22:1,m23:1,m30:1,m31:1,m32:1,m33:1,m:[1,3,4],m_start:1,made:3,magnitud:1,mai:[1,2,3,4],main:2,maintain:[3,4],major:1,make:[2,3,4],manag:[2,3],mani:[3,4],manifold:4,manual:2,map:3,map_cuda_devic:3,mark:3,mass:4,mat22:[1,2,3],mat33:[1,2,3],mat44:[1,2,3],match:3,materi:4,math:[0,2,3],mathbb:3,mathbf:3,matric:[1,3],matrix33:2,matrix:[1,3],max:[1,3],max_dist:1,max_t:1,maxim:4,maximum:[1,3],md:2,mean:[3,4],mechan:3,memori:[0,1,3,4],mesh:[0,1,4],mesh_eval_face_norm:1,mesh_eval_posit:1,mesh_eval_veloc:1,mesh_get:1,mesh_get_index:1,mesh_get_point:1,mesh_get_veloc:1,mesh_query_aabb:1,mesh_query_aabb_next:1,mesh_query_aabb_t:1,mesh_query_point:1,mesh_query_rai:[1,3],method:[1,3,4],min:[1,3],minim:3,minimum:1,mlp:1,mod:1,mode:3,model:[0,3],modelbuild:4,modifi:3,modul:[0,2,3,4],modulu:3,moller:1,more:[1,3],most:[1,3,4],move:[1,3],mu:4,mul:1,multi:[0,1],multipl:[2,3],multipli:1,muscl:4,must:[1,2,3],mutat:[2,3],mygrid:3,n:[1,2,3],name:3,nanovdb:3,narrow:3,nativ:3,natur:1,ndarrai:3,ndim:3,nearest:[1,3],need:[2,3],neg:1,neighbor:[1,3],neohookean:4,nest:3,network:1,next:1,node:4,nois:1,non:[1,3,4],none:[1,3,4],nonzero:1,normal:[1,3],notabl:1,notat:2,note:[1,2,3],np:[2,3],num_env:3,numba:0,number:[1,2,3,4],numer:3,numpi:[0,1,2],nvdb:3,object:[1,3,4],obtain:4,occur:[1,3],offer:3,offset:1,often:[2,3],omit:3,onc:[3,4],one:[2,3,4],ones:2,onli:[1,3,4],onto:[1,2,3],open:3,openvdb:3,oper:[0,2],oppos:4,option:[1,3,4],order:[1,3],ordin:3,org:4,orient:4,origin:[3,4],other:[0,3],otherwis:[1,3],ouput_dim:3,out:[1,3],outer:1,output:[1,2,3,4],output_buff:3,output_dim:3,output_index:3,outsid:3,outstand:3,over:[1,3],overhead:3,overlap:[1,3],overrid:4,overwrit:3,own:[3,4],owner:3,p1:1,p2:1,p:[1,3],packag:[2,3],page:0,pair:4,parallel:[1,3],param:[],paramet:[1,2,3,4],paramt:4,parent:4,part:[1,3],particip:3,particl:[3,4],particle_count:4,particle_inv_mass:4,particle_mass:4,particle_q:4,particle_qd:4,particularli:3,pass:[1,3],path:3,pattern:2,pd:4,pelas:4,pen:4,per:[1,3,4],perceptron:1,perform:[2,3,4],period:1,perlin:1,physic:[2,3,4],pin:3,pipelin:3,pitch:1,place:4,planar:4,plane:[1,4],pleas:[2,3],pnois:1,po:[1,4],point:[1,3,4],pointer:3,points_in_world_spac:3,poorli:3,popular:3,pose:4,posit:[1,3,4],possibl:[2,3,4],pow:1,power:1,pre:2,precis:3,precomput:3,preserv:[1,4],previou:3,previous:3,primari:3,print:[0,1],print_launch:3,printf:[1,3],problem:3,problemat:3,procedur:2,process:[1,2,3],product:[1,2,3],program:[1,2,3],progress:4,propag:[3,4],protocol:3,provid:3,pt:1,ptr:3,ptx:2,put:3,px:1,py:1,python:[2,3,4],pytorch:[0,1,2],pz:1,q0:1,q1:1,q2:1,q:[1,2,3],q_grad_i:3,quantiti:[],quarternion:1,quat:[1,2,3],quat_from_axis_angl:1,quat_from_matrix:1,quat_ident:1,quat_invers:1,quat_rot:1,quat_rotate_inv:1,quat_rpi:1,quat_slerp:1,quat_to_axis_angl:1,quat_to_matrix:1,quaternion:[0,2,3],queri:[1,3],queu:2,r:[1,2,3,4],radian:[1,4],radiu:[1,3,4],rai:[1,3],rais:[1,3],rand:3,rand_init:1,randf:1,randi:1,randn:1,random:[0,3],rang:[1,3,4],rapidli:4,rather:[2,4],ray_dir:3,ray_hit:3,ray_origin:3,raycast:3,rb:3,re:[1,3],read:[2,3],readi:4,readm:2,real:[1,3],reason:3,rebuild:3,recommend:[3,4],record:3,rectangular:4,recurs:2,redund:3,refer:[0,2],refit:3,regard:3,regist:[2,3],regular:4,rel:4,relax:4,repeat:3,replai:3,repres:[1,3,4],represent:4,request:3,requir:[3,4],requires_grad:[3,4],reshap:3,resid:3,resourc:3,respect:[3,4],respons:3,rest:4,restart:2,restor:3,restrict:3,result:[1,2,3],retriev:[1,3],retrun:1,reus:3,revers:3,reverse_wind:4,right:[1,4],rigid:[1,3,4],ring:1,rint:1,rng:1,robust:1,roll:1,root:4,rot:[1,4],rotat:[1,4],rotate_rodriguez:1,round:[1,3],row:[1,3],run:3,runtim:[0,2,4],s:[1,3,4],safe:3,same:[1,2,3],sampl:[1,3],sample_cdf:1,sample_grid:3,sample_triangl:1,sample_unit_cub:1,sample_unit_disk:1,sample_unit_hemispher:1,sample_unit_hemisphere_surfac:1,sample_unit_r:1,sample_unit_spher:1,sample_unit_sphere_surfac:1,sample_unit_squar:1,sampling_mod:1,scalar:0,scale:[1,3,4],scene:[3,4],scope:0,scopeddevic:3,screw:1,script:3,sdf:3,search:[0,1],second:[1,3,4],secondari:3,section:4,see:[2,3,4],seed:1,select:[1,3],select_index:3,semant:2,semi:4,semiimplicitintegr:4,sens:[1,3],separ:3,sequenc:2,sequenti:3,seri:3,serial:3,set:[1,2,3,4],set_devic:3,shade:2,shape:[2,3,4],shape_bodi:4,shape_count:4,shape_geo_scal:4,shape_geo_src:4,shape_geo_typ:4,shape_materi:4,shape_t:[],shape_transform:4,share:[1,2,3],sheet:4,should:[1,2,3,4],show:3,shown:3,side:3,sigma:1,sign:[1,3],signatur:[2,3],signific:3,silent:3,sim:[3,4],similar:[1,2,3],simpl:3,simple_kernel:[2,3],simpli:3,simplifi:3,simul:[0,2],sin:1,sinc:[3,4],sine:1,singl:[1,3,4],singular:1,sinh:1,size:3,skew:1,slice:[2,3],slower:1,small:4,smallest:[1,3],smallmatrix:3,smith:4,smooth:3,smoothli:1,smoothstep:1,snippet:3,so:[2,3,4],softwar:3,solid:4,some:[1,2,3],sort:1,sourc:[2,3,4],space:[1,3,4],spars:3,spatial:[0,3],spatial_adjoint:1,spatial_bottom:[1,3],spatial_cross:1,spatial_cross_du:1,spatial_dot:1,spatial_jacobian:1,spatial_mass:1,spatial_matrix:[1,3],spatial_top:[1,3],spatial_vector:[1,3],specfi:4,special:3,specif:3,specifi:[1,2,3,4],sph:3,sphere:[1,3,4],spring:4,spring_control:4,spring_count:4,spring_damp:4,spring_indic:4,spring_rest_length:4,spring_stiff:4,sqrt:1,squar:[1,3],src:[2,3],src_arrai:3,stabl:4,standard:[3,4],start:[1,3],startup:2,state:[0,1,2,3],state_in:4,state_out:4,stdout:1,step:[0,1,4],stiff:4,still:3,storag:3,store:[1,2,3,4],str:3,stream:3,strict:3,strictli:3,stride:3,string:[1,3],strong:0,strongli:[2,4],structur:[2,3,4],studio:3,style:[1,3],sub:1,subject:[3,4],subsequ:3,subtract:[1,3],success:3,suit:3,sum:3,support:[2,3,4],surfac:[1,4],surpris:3,suspect:3,svd3:1,svd:1,symbol:3,symmetr:1,symplect:4,synchron:[0,2],synchronize_devic:3,syntax:[1,2,3],system:[3,4],t:[1,3,4],take:[1,3],tan:1,tangent:1,tanh:1,tape:3,target:[3,4],templat:3,temporari:[2,3],tendon:4,tensor:[3,4],test:[1,3],tet_activ:4,tet_count:4,tet_indic:4,tet_materi:4,tet_pos:4,tetrahdera:4,tetrahedr:4,tetrahedra:4,tetrahedron:4,tetrhedra:4,than:[1,2,3,4],thei:[3,4],them:3,themselv:3,therefor:3,thi:[1,2,3,4],thing:3,third:4,those:3,thread:[1,2,3],three:[1,4],through:0,tid:[1,2,3],tile:3,tile_point:3,time:[2,3,4],to_torch:3,togeth:[1,2],toler:1,tool:3,top:[1,3,4],topolog:3,torch:3,total:4,tr:1,trace:1,track:[1,3],tranform:1,transfer:[2,3,4],transform:[0,3,4],transform_get_rot:1,transform_get_transl:1,transform_ident:1,transform_invers:1,transform_multipli:1,transform_point:1,transform_vector:1,translat:[1,3],transpos:1,travers:1,treat:[1,3,4],tri_activ:4,tri_count:4,tri_drag:4,tri_indic:4,tri_k:4,tri_ka:4,tri_kb:4,tri_kd:4,tri_lift:4,tri_pos:4,triangl:[1,3,4],trianglular:4,trigger:2,trilinear:3,trunc:1,tupl:[1,2,3,4],twice:3,twist:[1,3],two:[1,2,3,4],type:[0,4],type_capsul:3,type_cub:3,type_spher:3,typic:[1,3],u0:1,u1:1,u2:1,u:[1,3],uint16:[1,3],uint32:[1,3],uint64:[1,3],uint8:[1,3],unalloc:3,uncompress:3,uncondition:4,uncorrel:1,under:[3,4],underli:[2,3],understand:3,uniformli:1,uniniti:3,uninitiz:2,union:3,uniqu:3,unit:[1,3,4],unlik:2,unot:1,unpredict:3,unrol:3,unsign:3,unsupport:0,up:3,updat:[1,3,4],upper:[1,3,4],us:[1,2,3,4],usag:[0,1,3],usd:1,user:[0,1,2,4],util:0,uvw:1,v0:1,v1:1,v2:1,v:[1,2,3],valid:[2,3],valu:[0,1,2,4],vari:4,variabl:[1,2,3],variat:4,variou:3,vdb:3,vec2:[1,2,3],vec3:[1,2,3,4],vec4:[1,2,3],vector:[0,2],vel:4,veloc:[1,3,4],velocit:1,veri:3,verif:0,verifi:3,verify_cuda:3,version:3,vertex:[1,3,4],vertic:4,via:[2,3],view:[2,3],violat:3,viscoelast:4,visibl:2,visual:3,volum:[0,4],volume_index_to_world:1,volume_index_to_world_dir:1,volume_lookup_f:1,volume_lookup_i:1,volume_lookup_v:1,volume_sample_f:[1,3],volume_sample_i:1,volume_sample_v:1,volume_store_f:1,volume_store_i:1,volume_store_v:1,volume_world_to_index:[1,3],volume_world_to_index_dir:1,volumetr:[3,4],voxel:[1,3],voxel_s:3,w:[1,3,4],wa:3,wai:[1,3],wait:3,want:3,warp:[1,2,3,4],watertight:1,waypoint:4,we:[2,3],weight:1,well:[1,3],what:3,when:[1,3,4],where:[1,2,3],whether:3,which:[1,2,3,4],whole:1,width:[3,4],wiki:4,wikipedia:4,wind:4,wise:1,wish:3,within:3,withing:1,word:1,work:[3,4],workflow:3,world:[1,3,4],would:3,wp:[1,2,3,4],wrap:2,wrapper:3,wrench:1,write:[2,3],written:3,x:[1,2,3,4],xform:4,xpbd:4,xpbdintegr:4,xy:1,xyz:1,xyzt:1,y:[1,2,3,4],yaw:1,you:3,your:4,z:[1,3,4],zero:[1,2,3,4],zeros_lik:3,zip:3},titles:["NVIDIA Warp Documentation","Kernel Reference","Introduction","Runtime Reference","Simulation Reference"],titleterms:{"boolean":3,"default":3,"function":3,advanc:3,arithmet:3,arrai:3,bound:3,built:2,check:3,comparison:3,compil:2,constant:3,content:0,context:3,convers:3,cuda:3,cupi:3,current:3,custom:3,data:3,debug:3,detail:2,devic:3,differenti:3,dimension:3,document:0,exampl:2,featur:2,geometri:1,graph:3,grid:3,hash:3,immut:2,indic:0,initi:3,instal:2,integr:4,interop:3,introduct:2,jacobian:3,jax:3,kernel:[1,3],languag:2,launch:3,math:1,memori:2,mesh:3,model:[2,4],multi:3,numba:3,numpi:3,nvidia:0,oper:[1,3],other:1,print:3,pytorch:3,quaternion:1,random:1,refer:[1,3,4],runtim:3,scalar:[1,3],scope:3,simul:[3,4],spatial:1,state:4,step:3,strong:2,synchron:3,tabl:0,through:3,todo:4,transform:1,type:[1,2,3],unsupport:2,usag:2,user:3,util:1,valu:3,vector:[1,3],verif:3,volum:[1,3],warp:0}})