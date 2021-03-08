let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Dev/work/Opportunity-Calendar-Frontend
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +54 src/App.js
badd +1 ~/Dev/work/Opportunity-Calendar-Frontend/src/Components/ViewOpportunity/Opportunity.module.css
argglobal
%argdel
edit src/App.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 119 + 119) / 239)
exe 'vert 2resize ' . ((&columns * 119 + 119) / 239)
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=8
setlocal fml=1
setlocal fdn=20
setlocal fen
18
normal! zo
19
normal! zo
20
normal! zo
21
normal! zo
22
normal! zo
50
normal! zo
53
normal! zo
59
normal! zo
62
normal! zo
68
normal! zo
71
normal! zo
77
normal! zo
80
normal! zo
87
normal! zo
90
normal! zo
91
normal! zo
92
normal! zo
99
normal! zo
102
normal! zo
108
normal! zo
111
normal! zo
117
normal! zo
120
normal! zo
126
normal! zo
129
normal! zo
135
normal! zo
138
normal! zo
144
normal! zo
147
normal! zo
153
normal! zo
156
normal! zo
let s:l = 54 - ((31 * winheight(0) + 24) / 49)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
54
normal! 042|
wincmd w
argglobal
if bufexists("src/App.js") | buffer src/App.js | else | edit src/App.js | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=8
setlocal fml=1
setlocal fdn=20
setlocal fen
18
normal! zo
19
normal! zo
20
normal! zo
21
normal! zo
22
normal! zo
50
normal! zo
53
normal! zo
59
normal! zo
62
normal! zo
68
normal! zo
71
normal! zo
77
normal! zo
80
normal! zo
87
normal! zo
90
normal! zo
91
normal! zo
92
normal! zo
99
normal! zo
102
normal! zo
108
normal! zo
111
normal! zo
117
normal! zo
120
normal! zo
126
normal! zo
129
normal! zo
135
normal! zo
138
normal! zo
144
normal! zo
147
normal! zo
153
normal! zo
156
normal! zo
let s:l = 54 - ((24 * winheight(0) + 24) / 49)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
54
normal! 0
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 119 + 119) / 239)
exe 'vert 2resize ' . ((&columns * 119 + 119) / 239)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFA
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
